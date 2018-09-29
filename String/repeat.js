/*
函数目的：重复 N 次给定字符串。当n小于0时返回空字符串

参数：[string=''] (string): 要重复的字符串。
[n=1] (number): 重复的次数

返回
(string): 返回重复的字符串。

*/
// 用String.prototype.repaet的写法
function repeat(string,n=1) {
    if (n < 0) {
        return ''
    } else {
        return string.repeat(n)
    }
}
// 不用的写法
function repeat(string,n=1) {
    if (n < 0) {
        return ''
    } else {
        let resultStr = '';
        let count = Math.floor(n);
        while (count > 0) {
            resultStr+=string;
            count--;
        }
        return resultStr;
    }
}