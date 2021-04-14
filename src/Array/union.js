/*
函数目的：创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）

参数：[arrays] (...Array): 要检查的数组。
[values] (...*): 要剔除的值。
返回值：(Array): 返回一个新的联合数组。

*/
function union(...arrays){
    const arr = arrays.reduce((pre,cur) => {
        return pre.concat(cur);
    })
    return [...new Set(arr)];
}