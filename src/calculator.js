#!/usr/bin/env node

/**
 * Calculator CLI Application
 * 
 * Supported operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers
 * - Multiplication (*): Multiply numbers
 * - Division (/): Divide numbers (with division by zero error handling)
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

/**
 * Adds two numbers
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second
 * @throws {Error} if divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Performs calculation based on operation
 */
function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
    case 'x':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      throw new Error(`Unknown operation '${operation}'`);
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error('Usage: node calculator.js <number1> <operation> <number2>');
    console.error('Operations: +, -, *, /');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Please provide valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operation, num2);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
