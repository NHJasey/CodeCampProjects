
function confirmEnding(str, target) {

  var start = str.length-(target.length);
  if (str.substr(start,str.length)==target) {
    return true;
  } else {
  return false;
  }
}

confirmEnding("Bastian", "n");
