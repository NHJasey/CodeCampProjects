function sumAll(arr) {
    var list = [];

    var lower = Math.min(arr[0], arr[1]);
    var upper = Math.max(arr[0], arr[1]);

    for (var i = lower; i <= upper; i++) {
        list.push(i);
    }

    var total = list.reduce(function(a, b) {
        return a + b;
    });

    return total;
}
