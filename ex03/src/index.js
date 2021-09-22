function myEqualFunction(num) {
    if(num) {
        num === 23;
        return "Equal";
    } 
        return "Not equal";
}
    
myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");

console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));

module.exports = myEqualFunction;