/*
   由zhaojunzhe于2018/9/29创建
*/
/*
* 检查 value 是否是 null 或者 undefined。
* 参数
    value (*): 要检查的值。
  返回
    (boolean): 如果 value 为null 或 undefined，那么返回 true，否则返回 false。
* */
function isNil(value){
  return value == null;
}
