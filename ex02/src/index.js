const myTrueBoolean = require("../../ex01/src");

function myFunction(myParameter) {
    if(myParametar) {
        myFunction(true);
        return "The parameter is true!";
    }
    myFunction(false);
    return "The parameter is false!";
}

module.exports = myFunction;