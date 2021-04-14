/*
函数目的：返回限制在 lower 和 upper 之间的值。

参数：number (number): 被限制的值。
[lower] (number): 下限。
upper (number): 上限。

返回
(number): 返回被限制的值。

*/
function clamp(number,lower,upper) {
   /*
        当number大于upper时，返回upper
        小于lower则返回下限,
        number在lower和upper之间时，
        返回number
   */
   if (number >= upper || number <=lower) {
        if(number >= upper) {
            return upper;
        } else if (number <= lower) {
            return lower
        }
   } else {
       return number
   }
}