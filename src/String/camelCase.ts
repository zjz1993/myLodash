/*
函数目的：转换字符串string为 驼峰写法。

参数：[string=''] (string): 要转换的字符串。
返回
(string): 返回驼峰写法的字符串。

*/
export default function camelCase(string: string) {
  const str = string.toLowerCase();
  const wordArray = str.match(/[a-zA-Z0-9]+/g);
  let result = "";
  wordArray.forEach((item, index) => {
    if (index === 0) {
      result += item;
    } else {
      const strs = item[0].toUpperCase() + item.substr(1);
      result += strs;
    }
  });
  return result;
}
