function bubbleSort(array) {
    var done = false;//this will be nullified when we check all the array elements
    while (!done) {

        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
            done = true;
        }
    }

    return array;
}
function ArraySecondLargest(arr) {
    arr = bubbleSort(arr);
    // arr=arr.sort();
    //[1, 3.14, 4, 42, 7] this was the output, sth is wrong with the sort() function I guess
    return arr[arr.length - 2];
}
var ar = [42, 1, 4, 3.14, 7];
console.log(ArraySecondLargest(ar));