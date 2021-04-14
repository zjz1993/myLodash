/*
函数目的：将array递归为一维数组。

参数：array (Array): 需要处理的数组
返回值：(Array): 返回一个新的一维数组。

*/
export default function flatten(array, result = []) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
}
