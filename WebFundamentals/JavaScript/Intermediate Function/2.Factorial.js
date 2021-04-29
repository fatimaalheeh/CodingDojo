function factorial(num) {
    var Factor = 1;
    while (num != 0) {
        Factor *= num;
        num--;
    }
    return Factor;
}

console.log(factorial(5));