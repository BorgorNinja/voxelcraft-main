import {ITEMS} from './blocks.js';
export function renderHotbar(selected){const el=document.querySelector('#hotbar');el.innerHTML='';for(let i=0;i<9;i++){const id=ITEMS[i];const s=document.createElement('div');s.className='slot'+(i===selected?' sel':'');s.innerHTML=`<div>${i+1}</div><div class="swatch" style="background-image:url('./assets/item_atlas.png')'></div><div>${id}</div>`;el.appendChild(s)}}
export const status=t=>document.querySelector('#saveStatus').textContent=t;
