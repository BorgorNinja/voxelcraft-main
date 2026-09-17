export function createPlayer(world){return{x:world.player.x,z:world.player.z??.5,yaw:world.player.yaw||0,pitch:world.player.pitch||0,feetY:world.player.y||2,jumpLatch:false}}
export function savePlayer(world,p){world.player={x:p.x,y:p.feetY,z:p.z,yaw:p.yaw,pitch:p.pitch}}
