// TODO 4: Math Operation Functions

export function add(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return NaN;
  return numbers.slice(1).reduce((acc, n) => acc - n, numbers[0]);
}

export function multiply(numbers) {
  if (numbers.length === 0) return NaN;
  return numbers.reduce((prod, n) => prod * n, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return NaN;
  // Handle division by zero → return NaN as per lab hint
  if (numbers.slice(1).some((n) => n === 0)) return NaN;
  return numbers.slice(1).reduce((acc, n) => acc / n, numbers[0]);
}

