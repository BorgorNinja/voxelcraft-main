export const BLOCKS={
 air:{solid:false},grass:{solid:true},dirt:{solid:true},stone:{solid:true},sand:{solid:true},wood:{solid:true},leaves:{solid:true,transparent:true},glass:{solid:true,transparent:true,opacity:.42},water:{solid:false,transparent:true,water:true,opacity:.55},coal:{solid:true},iron:{solid:true},planks:{solid:true},brick:{solid:true},glow:{solid:true,emissive:true}
};
export const ITEMS=['grass','dirt','stone','sand','wood','leaves','glass','water','coal','iron','planks','brick','glow'];
export const TILE={grass:{side:0,top:1,bottom:2},dirt:{side:3,top:4,bottom:5},stone:{side:6,top:7,bottom:8},sand:{side:9,top:10,bottom:11},wood:{side:12,top:13,bottom:14},leaves:{side:15,top:16,bottom:17},glass:{side:18,top:19,bottom:20},water:{side:21,top:22,bottom:23},coal:{side:24,top:25,bottom:26},iron:{side:27,top:28,bottom:29},planks:{side:30,top:31,bottom:32},brick:{side:33,top:34,bottom:35},glow:{side:36,top:37,bottom:38}};
export const isOpaque=id=>!!BLOCKS[id]?.solid&&!BLOCKS[id]?.transparent;
export const isWater=id=>id==='water';
