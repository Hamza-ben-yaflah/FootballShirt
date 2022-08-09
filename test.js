function myFunction(obj) {
  let arr = Object.entries(obj).filter((el) => el[1] !== obj.b);
  let objct = {};
  for (let i = 0; i < arr.length; i++) {
    objct[arr[i][0]] = arr[i][1];
  }
  return objct;
}
