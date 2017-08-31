/**
 * Created by Administrator on 2017/7/10.
 */
// 处理字数过长，显示为xxxx...
export const doString = (str)=>{
    return str.substring(0,6)+'...'
};

//获取
export const  getLoaclStrong = (name)=>{
  let loacl = window.localStorage;
   return loacl.getItem(name)
};

//设置
export const  setLoaclStrong = (name,val)=>{
  if (typeof val !== 'string') {

    val = JSON.stringify(val);
  }
  let loacl = window.localStorage;
  return loacl.setItem(name,val)
};

//删除
export const  deleteLoaclStrong = (name)=>{
  let loacl = window.localStorage;
  return loacl.removeItem(name)
};
