// TODO 5: Parser Functions Using Lodash
import _ from "lodash";

// 5.1 Parse Numbers
// Note: _.compact removes 0 (which is valid), so use _.filter(_.isFinite) instead.
export function parseNumbers(input) {
  const nums = _.map(input, (str) => Number(str));
  return _.filter(nums, (n) => Number.isFinite(n));
}

// 5.2 Validate Operation
export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

