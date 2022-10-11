#!/usr/bin/env node

const lib = require("./lib.js");

//console.log(process.argv);

if (process.argv.length <= 3) {
    // node main.js (operation) 만 입력으로 들어옴 => 1 2 3이 안들어옴
    console.log("Insufficient parameter");
    process.exit(1);
}

const command = process.argv[2];


//console.log(process.argv.slice(3, process.argv.length));

/*
c에서 사용하는 방법
let numbers = process.argv.slice(3, process.argv.length);
// index 3 ~ last index
for (let i = 0; i < numbers.length; i++) numbers[i] = parseFloat(numbers[i]);
*/

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

// numbers.some((n) => isNaN(n))    둘다 같은 결과를 출력함
// numbers.some(isNaN)

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "toDec":
        result = lib.toDec(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);

