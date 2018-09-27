// 对象键值字母排序
export const objSort= obj => {
  let newObj= Object.keys(obj).sort();
  let sObj={};
  for(let i= 0; i < newObj.length; i++){
    sObj[newObj[i]]=obj[newObj[i]];
  }
  return sObj;
};
