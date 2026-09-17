import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
export function loadAtlas(url){return new Promise((resolve,reject)=>{const l=new THREE.TextureLoader();l.load(url,t=>{t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;resolve(t)},undefined,reject)})}
export function tileUV(tile,columns=16,rows=4){const tx=tile%columns,ty=Math.floor(tile/columns),s=1/columns,r=1/rows;return[tx*s,1-(ty+1)*r,(tx+1)*s,1-ty*r]}
