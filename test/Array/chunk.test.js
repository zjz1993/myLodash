import chunk from "../../src/Array/chunk";
import lodashStable from "lodash";
const falsey = [, null, undefined, false, 0, NaN, ""];
const stubArray = function () {
  return [];
};
describe("chunk", function () {
  const array = [0, 1, 2, 3, 4, 5];

  it("should return chunked arrays", function () {
    const actual = chunk(array, 3);
    expect(actual).toStrictEqual([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  it("should return the last chunk as remaining elements", function () {
    const actual = chunk(array, 4);
    expect(actual).toStrictEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });

  it("should treat falsey `size` values, except `undefined`, as `0`", function () {
    const expected = lodashStable.map(falsey, function (value) {
      return value === undefined ? [[0], [1], [2], [3], [4], [5]] : [];
    });
    const actual = lodashStable.map(falsey, function (size, index) {
      return index ? chunk(array, size) : chunk(array);
    });
    expect(actual).toStrictEqual(expected);
  });

  it("should ensure the minimum `size` is `0`", function () {
    const values = lodashStable
      .reject(falsey, lodashStable.isUndefined)
      .concat(-1, -Infinity);
    const expected = lodashStable.map(values, stubArray);

    const actual = lodashStable.map(values, function (n) {
      return chunk(array, n);
    });

    expect(actual).toStrictEqual(expected);
  });

  it("should coerce `size` to an integer", function () {
    expect(chunk(array, array.length / 4)).toStrictEqual([
      [0],
      [1],
      [2],
      [3],
      [4],
      [5],
    ]);
  });
});
