function positiveSum() {
    let sum = 0;
    let arr = arguments[0];
    for (let i=0; i<arr.length; i++) {
        if(arr[i] > 0) {
            sum = sum + Number(arr[i]);
        } else {
            sum =sum + 0;
        }
    }
    return sum;
}

positiveSum([2, 4, 6, 8]);
positiveSum([0, -3, 5, 7]);