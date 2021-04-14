import lodashStable from "lodash";
import flatMapDepth from "../../src/Array/flattenDepth";
const identity = function (value) {
  return value;
};
describe("flatMapDepth", function () {
  const array = [1, [2, [3, [4]], 5]];

  it("should use a default `depth` of `1`", function () {
    expect(flatMapDepth(array)).toStrictEqual([1, 2, [3, [4]], 5]);
  });

  it("should use `_.identity` when `iteratee` is nullish", function () {
    const values = [, null, undefined];
    const expected = lodashStable.map(
      values,
      lodashStable.constant([1, 2, [3, [4]], 5])
    );

    const actual = lodashStable.map(values, function (value, index) {
      return index ? flatMapDepth(array, 1, value) : flatMapDepth(array);
    });
    expect(actual).toStrictEqual(expected);
  });

  it("should treat a `depth` of < `1` as a shallow clone", function () {
    lodashStable.each([-1, 0], function (depth) {
      expect(flatMapDepth(array, depth, identity)).toStrictEqual([
        1,
        [2, [3, [4]], 5],
      ]);
    });
  });

  it("should coerce `depth` to an integer", function () {
    expect(flatMapDepth(array, 2.3)).toStrictEqual([1, 2, 3, [4], 5]);
  });
});
