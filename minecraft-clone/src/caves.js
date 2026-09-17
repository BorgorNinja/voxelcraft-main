import {HEIGHT} from './config.js';
import {fbm3,noise3} from './noise.js';
export function shouldCarve(x,y,z,seed,top){if(y<4||y>top-2||y>=HEIGHT-1)return false;const broad=fbm3(x*.045,y*.055,z*.045,seed+9001,3);const fine=fbm3(x*.09,y*.09,z*.09,seed+17003,2);const tube=Math.abs(broad-.5)<.105&&fine>.30;const vertical=(y/top)>.08&&(y<top-2);return tube&&vertical}
export function carveCaves(world,seed,minX,maxX,minZ,maxZ){for(let x=minX;x<maxX;x++)for(let z=minZ;z<maxZ;z++){const top=world.heightAt(x,z);for(let y=4;y<Math.min(top-1,HEIGHT-1);y++){const id=world.get(x,y,z);if((id==='stone'||id==='coal'||id==='iron')&&shouldCarve(x,y,z,seed,top))world.set(x,y,z,'air')}}}
export function caveDensity(x,y,z,seed){return noise3(x*.06,y*.07,z*.06,seed+77)}
