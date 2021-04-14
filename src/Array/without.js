/*
函数目的：返回一个删除所有values值后的 array副本。

参数：array (Array): 要检查的数组。
[values] (...*): 要剔除的值。
返回值：(Array): 返回过滤值后的新数组。

*/
function without(array,...value){
    const set = new Set(value);
    const resultArr = array.filter((item) => {
        return !set.has(item)
    })
    return resultArr;

}