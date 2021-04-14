import drop from "./drop";
export default function dropRight(
  array,
  n = 1,
  direction: "left" | "right" = "right"
) {
  return drop(array, n, direction);
}
