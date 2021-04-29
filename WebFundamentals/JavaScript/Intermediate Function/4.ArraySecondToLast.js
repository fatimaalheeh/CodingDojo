function ArraySecondToLast(arr) {
    var long = arr.length;
    if (long <= 2) {
        return null;
    }
    else {
        return arr[arr.length - 2];
    }

}
var ar = [42, true, 4, "Liam", 7];
console.log(ArraySecondToLast(ar));