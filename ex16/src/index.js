function checkSign(num) {
    
    return (num === 0) ? "zero" :
        (num > 0) ? "positive" : "negative";
}

checkSign(10);
checkSign(-12);
checkSign(0);

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

module.exports = checkSign;