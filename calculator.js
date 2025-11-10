// TODO 1: Import Required Modules
import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";
import _ from "lodash";

// TODO 2: Parse Command Line Arguments
const operation = process.argv[2];
const rawNumbers = process.argv.slice(3);

// TODO 3: Validate Input and Calculate
if (!isValidOperation(operation)) {
  console.log("Invalid operation. Use: add, subtract, multiply, or divide");
  process.exit(1);
}

const nums = parseNumbers(rawNumbers);

if (_.isEmpty(nums)) {
  console.log("Please provide at least one valid number.");
  process.exit(1);
}

let result;
switch (operation) {
  case "add":
    result = add(nums);
    break;
  case "subtract":
    result = subtract(nums);
    break;
  case "multiply":
    result = multiply(nums);
    break;
  case "divide":
    result = divide(nums);
    break;
  default:
    console.log("Invalid operation. Use: add, subtract, multiply, or divide");
    process.exit(1);
}

console.log(`Result: ${result}`);
