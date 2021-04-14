/*
函数目的：使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

Note: 这个方法会改变 array

参数：array (Array): 要填充改变的数组。
value (*): 填充给 array 的值。
[start=0] (number): 开始位置（默认0）。
[end=array.length] (number):结束位置（默认array.length）。

返回值：(Array): (Array): 返回 array。

*/
function fill(array, value, start = 0, end = array.length) {
  const processedStart = start < 0 ? 0 : start;
  const processedEnd = end > array.length ? array.length : end;
  for (let i = processedStart; i < processedEnd; i++) {
    array[i] = value;
  }
  return array;
}
