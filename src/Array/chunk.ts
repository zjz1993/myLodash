/*
函数目的：将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

参数：array (Array): 需要处理的数组
[size=1] (number): 每个数组区块的长度

*/
export default function chunk(array: Array<any>, size: number = 1) {
  if (typeof size !== "number" || !Array.isArray(array)) {
    return [];
  } else {
    size = parseInt(String(size), 10);
    if (size === 0) {
      return [];
    } else {
      const resultArray = [];
      const remainder = Math.ceil(array.length / size);
      for (let i = 0; i < remainder; i++) {
        const arrays = array.slice(i * size, (i + 1) * size);
        resultArray.push(arrays);
      }
      return resultArray;
    }
  }
}
