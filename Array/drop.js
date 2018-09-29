function drop(array, n=1) {
  if (n <= 0) {
    return array;
  } else {
    return array.slice(parseInt(n,10));
  }
}