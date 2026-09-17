import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
import {UNDERWATER_RENDER_DISTANCE,DEFAULT_RENDER_DISTANCE} from './config.js';
export function isUnderwater(world,camera){return world.get(Math.floor(camera.position.x),Math.floor(camera.position.y),Math.floor(camera.position.z))==='water'}
export function updateWaterView(scene,renderer,underwater){const c=underwater?0x2b6380:0x79b9e8;scene.background.setHex(c);scene.fog=new THREE.Fog(c,underwater?10:55,underwater?42:150);renderer.toneMappingExposure=underwater?.85:1;return underwater?UNDERWATER_RENDER_DISTANCE:DEFAULT_RENDER_DISTANCE}
