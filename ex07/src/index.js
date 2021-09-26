function logicalAndOperator(num) {
    if (num >= 40 && num <= 80) {
        return "Yes";
    }
    return "No";
}

logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);

console.log(logicalAndOperator(0));
console.log(logicalAndOperator(24));
console.log(logicalAndOperator(45));
console.log(logicalAndOperator(57));
console.log(logicalAndOperator(100));

module.exports = logicalAndOperator;