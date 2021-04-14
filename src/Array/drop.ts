export default function drop(
  array,
  n = 1,
  direction: "left" | "right" = "left"
) {
  array = Array.from(array);
  if (typeof n !== "number" || (typeof n === "number" && isNaN(n))) {
    return array;
  } else {
    if (n <= 0) {
      return array;
    } else if (n >= array.length) {
      return [];
    } else {
      if (direction === "left") {
        return array.slice(parseInt(String(n), 10));
      } else {
        return array.slice(0, array.length - parseInt(String(n), 10));
      }
    }
  }
}
