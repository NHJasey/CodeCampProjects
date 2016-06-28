function rot13(str)
  return str.replace(/[A-Z]/g, function(letter) {
    var newpos = letter.charCodeAt(0) + 13;
    if (newpos > 90) newpos -= 26;
    return String.fromCharCode(newpos);
  });
}

rot13("PBQR");
