function sigma(num) {
    var sigmasum = 0;
    while (num != 0) {
        sigmasum += num;
        num--;
    }
    return sigmasum;
}

console.log(sigma(3));