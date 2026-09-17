import {HEIGHT,SEA} from './config.js';
import {hash2,noise2} from './noise.js';
export function terrainHeight(x,z,seed){let n=0,a=1,f=.018,total=0;for(let i=0;i<4;i++){n+=noise2(x*f,z*f,seed)*a;total+=a;a*=.5;f*=2}return Math.floor(8+n/total*20)}
export function biome(x,z,seed){const n=noise2(x*.006+200,z*.006-100,seed);return n<.28?'desert':n>.72?'forest':'plains'}
export function baseColumn(x,z,seed,set,get){const h=Math.max(2,Math.min(HEIGHT-2,terrainHeight(x,z,seed))),b=biome(x,z,seed);for(let y=0;y<=h;y++){let id=y===h?(b==='desert'?'sand':'grass'):y>h-3?(b==='desert'?'sand':'dirt'):'stone';if(y>4&&y<h-3&&hash2(x+y*13,z-y*7,seed)>.92)id='coal';if(y>7&&y<h-5&&hash2(x-y*5,z+y*11,seed)>.965)id='iron';set(x,y,z,id)}
 if(h<SEA)for(let y=h+1;y<=SEA;y++)set(x,y,z,'water');
 if(b==='forest'&&h>SEA&&hash2(x,z,seed)>.965){for(let y=h+1;y<h+5;y++)set(x,y,z,'wood');for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++)for(let dy=3;dy<=5;dy++)if(Math.abs(dx)+Math.abs(dz)+dy<8&&get(x+dx,h+dy,z+dz)==='air')set(x+dx,h+dy,z+dz,'leaves')}
 return h}
