/*
函数目的：检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。

参数：number (number): 要检查的值。
[start=0] (number): 开始范围。
end (number): 结束范围。

返回
(number): (boolean): 如果number在范围内 ，那么返回true，否则返回 false。

*/
function inRange(number,start=0,end) {
   if (!end) {
       end = start;
       start = 0;
   }
   if (start > end) {
       let t = start;
       start = end;
       end = t;
   }
   if (number >= start && number < end) {
       return true;
   } else {
       return false;
   }
}