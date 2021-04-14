/*
函数目的：转换字符串string为 空格 分隔的大写单词。


参数：[string=''] (string): 要转换的字符串。


返回
(string): 返回大写单词。

经过测试，数字，字母都算单词，其余不算

*/
function upperCase(string='') {
   let wordArr = string.match(/[a-zA-Z0-9]+/g);
   let result = ''
   for (let i = 0;i < wordArr.length; i++) {
       result = result + wordArr[i] + ' ';
   }
   return result.trim();
}