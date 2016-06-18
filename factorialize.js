function factorialize(num) {
    var myCount = 1;
    for (var i = 1; i <= num ; i++) {
        myCount *= i;
    }
    return myCount;
}

factorialize(5)
