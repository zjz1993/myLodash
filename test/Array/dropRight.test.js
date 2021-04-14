import lodashStable from "lodash";
import dropRight from "../../src/Array/dropRight";
const falsey = [, null, undefined, false, 0, NaN, ""];
describe("drop", function () {
  const array = [1, 2, 3];

  it("should drop the last two elements", function () {
    expect(dropRight(array, 2)).toStrictEqual([1]);
  });

  it("should treat falsey `n` values, except `undefined`, as `0`", function () {
    const expected = lodashStable.map(falsey, function (value) {
      return value === undefined ? [1, 2] : array;
    });

    const actual = lodashStable.map(falsey, function (n) {
      return dropRight(array, n);
    });
    expect(actual).toStrictEqual(expected);
  });

  it("should return all elements when `n` < `1`", function () {
    lodashStable.each([0, -1, -Infinity], function (n) {
      expect(dropRight(array, n)).toStrictEqual(array);
    });
  });

  it("should return an empty array when `n` >= `length`", function () {
    lodashStable.each([3, 4, Math.pow(2, 32), Infinity], function (n) {
      expect(dropRight(array, n)).toStrictEqual([]);
    });
  });

  it("should coerce `n` to an integer", function () {
    expect(dropRight(array, 1.6)).toStrictEqual([1, 2]);
  });
});
