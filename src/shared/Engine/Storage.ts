type Fields = 'colliders' | 'isMute';
const store:Record<Fields,any> = {
    'colliders':{},
    'isMute':true,
};
export function setStoreField(field:Fields,data:any):void { 
    store[field] = data;
}
export function getStoreField(field:Fields):any { 
    return store[field];
}