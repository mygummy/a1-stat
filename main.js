#!/usr/bin/env node

const lib = require("./lib");
if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

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
    case "med":
        result = lib.med(numbers);
        break;
    case "iqr":
        result = lib.iqr(numbers);
        break;
    case "outliner":
        if(numbers.length < 2) {
            console.log("The length of the input array must be equal to or longer than 2.");
            process.exit(1);
        }
        result = lib.outliner(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

if(typeof result === "number") console.log(result);
else for(let i = 0; i < result.length; i++) console.log(result[i]);


