/*
函数目的：创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step。


参数：[start=0] (number): 开始的范围。
end (number): 结束的范围。
[step=1] (number): 范围的增量 或者 减量。


返回
(Array): 返回范围内数字组成的新数组。

*/
/* jshint esversion: 6 */
function range(start = 0, end, step = 1) {
    let result = [];
    if (!end) {
        end = start;
        start = 0;
    }
    if (step < 0) {
        step = -step;
    }
    console.log(start, end, step)
    if (step === 0) {
        let t = end - start;
        while (t > 0) {
            result.push(start);
            t--;
        }
        return result;
    } else {
        for (let i = start; end < 0 ? i < -end : i < end; i = i + step) {
            result.push(end < 0 ? -i : i);
        }
        return result;
    }
}