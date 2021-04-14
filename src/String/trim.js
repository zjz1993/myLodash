/*
函数目的：从string字符串中移除前面和后面的 空格 或 指定的字符。

参数：[string=''] (string): 要处理的字符串。
[chars=whitespace] (string): 要移除的字符。

返回
(string): 返回处理后的字符串。

*/
function trim(string='',chars='') {
    if (chars === '') {
        return string.replace(/(^\s+)?(\s+$)?/g,'');
    } else {
        // TODO 现在还没想出怎么去掉指定的字符,现在只能去掉空格
    }
}