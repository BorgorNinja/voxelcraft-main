import {CHUNK,HEIGHT,MAX_RENDER_DISTANCE} from './config.js';
import {baseColumn,terrainHeight} from './terrain.js';
import {carveCaves} from './caves.js';
export const key=(x,y,z)=>`${x},${y},${z}`;
export const chunkKey=(cx,cz)=>`${cx},${cz}`;
export const floorDiv=(n,d)=>Math.floor(n/d);
export function createWorld(seed){const w={seed:seed|0,blocks:new Map(),dirty:new Set(),generated:new Set(),heightCache:new Map(),created:Date.now(),time:0,player:{x:.5,y:2,z:.5,yaw:0,pitch:0}};w.get=(x,y,z)=>w.blocks.get(key(x,y,z))||'air';w.set=(x,y,z,id)=>{if(y<0||y>=HEIGHT)return;const k=key(x,y,z);if(id==='air')w.blocks.delete(k);else w.blocks.set(k,id);w.dirty.add(chunkKey(floorDiv(x,CHUNK),floorDiv(z,CHUNK)))};w.heightAt=(x,z)=>{const k=`${x},${z}`;let h=w.heightCache.get(k);if(h===undefined){h=terrainHeight(x,z,w.seed);w.heightCache.set(k,h)}return h};w.generatedChunks=new Set();return w}
export function generateChunk(w,cx,cz){const ck=chunkKey(cx,cz);if(w.generatedChunks.has(ck))return;const minX=cx*CHUNK,minZ=cz*CHUNK;for(let x=minX;x<minX+CHUNK;x++)for(let z=minZ;z<minZ+CHUNK;z++)baseColumn(x,z,w.seed,w.set,w.get);carveCaves(w,w.seed,minX,minX+CHUNK,minZ,minZ+CHUNK);w.generatedChunks.add(ck);w.dirty.add(ck)}
export function generateAround(w,pcx,pcz,radius=MAX_RENDER_DISTANCE){for(let cx=pcx-radius;cx<=pcx+radius;cx++)for(let cz=pcz-radius;cz<=pcz+radius;cz++)generateChunk(w,cx,cz)}
export function inRenderDistance(cx,cz,pcx,pcz,r){return Math.max(Math.abs(cx-pcx),Math.abs(cz-pcz))<=r}
export function exportWorld(w){return JSON.stringify({version:5,seed:w.seed,created:w.created,time:w.time,player:w.player,blocks:[...w.blocks]})}
export function importWorld(data){const o=typeof data==='string'?JSON.parse(data):data;const w=createWorld(o.seed);w.created=o.created||Date.now();w.time=o.time||0;w.player=o.player||w.player;for(const [k,id] of o.blocks||[])w.blocks.set(k,id);for(const k of w.blocks.keys()){const [x,y,z]=k.split(',').map(Number);w.generatedChunks.add(chunkKey(floorDiv(x,CHUNK),floorDiv(z,CHUNK)))}return w}
