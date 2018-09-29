/*
   由zhaojunzhe于2018/9/29创建
*/
/*
* 创建一个被打乱值的集合。 使用 Fisher-Yates shuffle(https://blog.csdn.net/huanghanqian/article/details/74231433) 版本。
参数
collection (Array|Object): 要打乱的集合。
返回
(Array): 返回打乱的新数组。
* */
function shuffle(array) {
  const length = array.length;
  for(let i=0;i<length;i++){
    let randomIndex = Math.floor(Math.random()*(length-i));
    let t=array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = t;
  }
  return array;
}
