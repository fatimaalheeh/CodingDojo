function ArrayNthToLast(arr, Nth) {
    var long = arr.length;
    if (long <= 2) {
        return null;
    }
    else {
        return arr[arr.length - Nth];
    }

}
var ar = [5, 2, 3, 6, 4, 9, 7];
console.log(ArrayNthToLast(ar, 3));