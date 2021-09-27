function myForLoop1() {
    var evenNumbers = "";

    for ( var i = 0; i < 9; i = i + 2 ) {
        evenNumbers += i;
        if ( i <= 6 ) {
            evenNumbers += ", "
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = "";

    for ( var j = 8; j >= 0; j = j - 2 ) {
        evenInverseNumbers += j;
        if ( j > 0 ) {
            evenInverseNumbers += ", "
        }
    }
    return evenInverseNumbers;
}


console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};