function binaryAgent(str) {
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';

  for (var s = 0; s < str.length; s++) {
    for (var t = 0; t < str[s].length; t++) {
      if (str[s][t] == 1) {
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

      }
    }

    sentence += (String.fromCharCode(decValue));

    decValue = 0;
  }

  return sentence;
}
