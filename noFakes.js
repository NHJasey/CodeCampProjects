function bouncer(arr) {
  function notFake(arg){
    return Boolean(arg);
  }
  var filteredArray = arr.filter(notFake);
  return filteredArray;
}
