function isBigger(num1, num2) {    
    return num1 > num2;
}

function getDifference(number1, number2) {
    if( isBigger(number1, number2) ) {
        return number1 - number2;
    } else {
        return number2 - number1;
    }
}

getDifference(5, 3);
getDifference(5, 8);