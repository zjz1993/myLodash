/*
函数目的：创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

参数：array (Array): 需要处理的数组
返回值：(Array): 返回过滤掉假值的新数组。

*/
function compact(array) {
    return array.filter((item) => {
        return !!item === true;
    })
};