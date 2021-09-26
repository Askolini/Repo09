function switchCaseSequential(num) {
    var answer;
    switch (num) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;

    switchCaseSequential(1);
    switchCaseSequential(2);
    switchCaseSequential(3);
    switchCaseSequential(4);
    switchCaseSequential(5);
    switchCaseSequential(6);
    switchCaseSequential(7);
    switchCaseSequential(8);
    switchCaseSequential(9);

}

console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));

module.exports = switchCaseSequential;