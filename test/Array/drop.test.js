import lodashStable from "lodash";
import drop from "../../src/Array/drop";
const falsey = [, null, undefined, false, 0, NaN, ""];
describe("drop", function () {
  const array = [1, 2, 3];

  it("should drop the first two elements", function () {
    expect(drop(array, 2)).toStrictEqual([3]);
  });

  it("should treat falsey `n` values, except `undefined`, as `0`", function () {
    const expected = lodashStable.map(falsey, function (value) {
      return value === undefined ? [2, 3] : array;
    });

    const actual = lodashStable.map(falsey, function (n) {
      return drop(array, n);
    });
    expect(actual).toStrictEqual(expected);
  });

  it("should return all elements when `n` < `1`", function () {
    lodashStable.each([0, -1, -Infinity], function (n) {
      expect(drop(array, n)).toStrictEqual(array);
    });
  });

  it("should return an empty array when `n` >= `length`", function () {
    lodashStable.each([3, 4, Math.pow(2, 32), Infinity], function (n) {
      expect(drop(array, n)).toStrictEqual([]);
    });
  });

  it("should coerce `n` to an integer", function () {
    expect(drop(array, 1.6)).toStrictEqual([2, 3]);
  });
});
