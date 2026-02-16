#!/usr/bin/env node

/**
 * Calculator CLI Application
 * 
 * Supported operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers
 * - Multiplication (*): Multiply numbers
 * - Division (/): Divide numbers (with division by zero error handling)
 * - Modulo (%): Returns the remainder of division
 * - Exponentiation (^): Raises base to the power of exponent
 * - Square Root (sqrt): Returns the square root of a number
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
 * Returns the remainder of a divided by b
 * @throws {Error} if divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Returns base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of n
 * @throws {Error} if n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number is not allowed');
  }
  return Math.sqrt(n);
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
    case '%':
      return modulo(num1, num2);
    case '^':
      return power(num1, num2);
    case 'sqrt':
      return squareRoot(num1);
    default:
      throw new Error(`Unknown operation '${operation}'`);
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node calculator.js <number1> <operation> [number2]');
    console.error('Operations: +, -, *, /, %, ^, sqrt');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = args[2] ? parseFloat(args[2]) : null;

  if (isNaN(num1)) {
    console.error('Error: Please provide valid numbers');
    process.exit(1);
  }

  if (operation !== 'sqrt' && (num2 === null || isNaN(num2))) {
    console.error('Error: Please provide a valid second number');
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
