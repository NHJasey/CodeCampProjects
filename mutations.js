function mutation(arr) {

    var word1 = arr[0].toLowerCase().split('');
    var word2 = arr[1].toLowerCase().split('');
    var temp = 0;
    for (var s in word2){
        if (word1.indexOf(word2[s]) > -1) {
            temp+= 0;
        } else
            temp+=1;
        }
    if (temp === 0)
        return true;
    else
        return false;
}
