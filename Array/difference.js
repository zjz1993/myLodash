/*
* 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
* （愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
* 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
* */
function difference(array, ...values) {
  var value = values.reduce((acc,cur) => {
    return acc.concat(cur);
  })
  return array.filter((item) => {
    return !value.includes(item)
  })
}
