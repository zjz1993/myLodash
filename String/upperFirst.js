/*
函数目的：转换字符串string的首字母为大写。


参数：[string=''] (string): 要转换的字符串。


返回
(Array): (string): 返回转换后的字符串。

*/
function upperFirst(string='') {
   return string[0].toUpperCase() + string.substr(1);
}