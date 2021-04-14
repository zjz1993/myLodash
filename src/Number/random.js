/*
函数目的：产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个0到提供数之间的数。 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。 


参数：[lower=0] (number): 下限。
[upper=1] (number): 上限。
[floating] (boolean): 指定是否返回浮点数。


返回
(number): (boolean): (number): 返回随机数。

*/
function random(lower=0,upper=1,floating) {
   if (lower > upper) {
       let t = lower;
       lower = upper;
       upper = t;
   }
   let randomNumber = (upper-lower)*Math.random() + lower;
   function isInt(number) {
       if (parseInt(number, 10) === number) {
           return true;
       } else {
           return false;
       }
   }
   if (isInt(lower) && isInt(upper) && !floating) {
       return parseInt(randomNumber, 10);
   } else {
       return randomNumber;   
   }
}