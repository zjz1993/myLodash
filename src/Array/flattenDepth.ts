/*
   由zhaojunzhe于2019-04-08创建
*/

/*
* 函数目的：根据 depth 递归减少 array 的嵌套层级
*
* 参数：array (Array): 需要减少嵌套层级的数组。
       [depth=1] (number):最多减少的嵌套层级数。

  * 例如：var array = [1, [2, [3, [4]], 5]];

_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
* */

export default function flattenDepth(array, depth: number = 1, iteratee) {
  const result = [];
  depth = parseInt(String(depth), 10);
  if (iteratee) {
    array = iteratee(array);
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      result.push(...flattenDepth(array[i], depth - 1, iteratee));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
