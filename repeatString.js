function repeatStringNumTimes(str, num) {

 var emptyArray = [];
  for (var i = 0; i < num; i++) {
    emptyArray.push(str);
  }
  str = emptyArray.join("");
  return str;
}

repeatStringNumTimes("abc", 3);
