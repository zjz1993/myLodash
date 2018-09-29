function difference(array, ...values) {
  values.forEach((item) => {
    item.forEach((items) => {
      let index = array.indexOf(items);
      if (index !== -1) {
        array.splice(index, 1);
      }
    })
  })
  return array;
}