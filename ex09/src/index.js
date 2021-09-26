function functionElse(num) {
    var result = " ";
    if (num <= 5) {
        result = "5 or smaller";
        return result;
    } else {
        result = "Bigger than 5";
        return result;
    }
}

functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);

console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));

module.exports = functionElse;