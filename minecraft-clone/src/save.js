import {DB_NAME,STORE} from './config.js';
import {exportWorld,importWorld} from './world.js';
function open(){return new Promise((res,rej)=>{const r=indexedDB.open(DB_NAME,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function saveWorld(name,w){const db=await open();await new Promise((res,rej)=>{const t=db.transaction(STORE,'readwrite');t.objectStore(STORE).put(exportWorld(w),name);t.oncomplete=res;t.onerror=()=>rej(t.error)});db.close()}
export async function loadWorld(name){const db=await open();const data=await new Promise((res,rej)=>{const t=db.transaction(STORE,'readonly');const r=t.objectStore(STORE).get(name);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});db.close();return data?importWorld(data):null}
export function downloadSave(name,w){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([exportWorld(w)],{type:'application/json'}));a.download=`${name||'world'}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
export async function readImport(file){return importWorld(await file.text())}
