function doubletrouble(arr) {
    var doublearr = [];
    var long = arr.length;
    for (var i = 0; i < long; i++) {
        while (true) {
            doublearr.push(arr[i]);
            doublearr.push(arr[i]);

            break;

        }


    }

    return doublearr;
}
var ar = [4, "Ulysses", 42, false];
console.log(doubletrouble(ar));