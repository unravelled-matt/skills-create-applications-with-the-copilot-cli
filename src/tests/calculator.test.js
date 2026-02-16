const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  
  // Addition Tests
  describe('Addition', () => {
    test('should add two positive numbers (2 + 3 = 5)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-3, -7)).toBe(-10);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // Subtraction Tests
  describe('Subtraction', () => {
    test('should subtract two positive numbers (10 - 4 = 6)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract larger number from smaller (negative result)', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative number (equivalent to addition)', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract zero', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should result in zero when subtracting equal numbers', () => {
      expect(subtract(5, 5)).toBe(0);
    });
  });

  // Multiplication Tests
  describe('Multiplication', () => {
    test('should multiply two positive numbers (45 * 2 = 90)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(6, -4)).toBe(-24);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  // Division Tests
  describe('Division', () => {
    test('should divide two positive numbers (20 / 5 = 4)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide by one', () => {
      expect(divide(15, 1)).toBe(15);
    });

    test('should divide negative numbers', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('should divide positive by negative', () => {
      expect(divide(30, -6)).toBe(-5);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // Modulo Tests
  describe('Modulo', () => {
    test('should calculate modulo with 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo of evenly divisible numbers (10 % 5 = 0)', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with larger divisor (3 % 5 = 3)', () => {
      expect(modulo(3, 5)).toBe(3);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(modulo(-7, 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor', () => {
      expect(modulo(7, -3)).toBe(1);
    });

    test('should calculate modulo with both negative numbers', () => {
      expect(modulo(-7, -3)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should calculate modulo of zero (0 % 5 = 0)', () => {
      expect(modulo(0, 5)).toBe(0);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should calculate modulo with large numbers', () => {
      expect(modulo(1000, 7)).toBe(6);
    });
  });

  // Power Tests
  describe('Power', () => {
    test('should calculate power with 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with positive base and exponent (5 ^ 2 = 25)', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with exponent 0 (any ^ 0 = 1)', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
    });

    test('should calculate power with exponent 1 (base ^ 1 = base)', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should calculate power with base 0 (0 ^ n = 0)', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should calculate power with base 1 (1 ^ n = 1)', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('should calculate power with negative exponent (2 ^ -2 = 0.25)', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate power with negative base and odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with decimal exponent (square root)', () => {
      expect(power(16, 0.5)).toBe(4);
    });

    test('should calculate large power', () => {
      expect(power(10, 6)).toBe(1000000);
    });
  });

  // Square Root Tests
  describe('Square Root', () => {
    test('should calculate square root with √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square (√25 = 5)', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of non-perfect square (√2)', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('should calculate square root of 1 (√1 = 1)', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of 0 (√0 = 0)', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should calculate square root of very small positive number', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });

    test('should throw error for negative number (√-4)', () => {
      expect(() => squareRoot(-4)).toThrow('Square root of negative number is not allowed');
    });

    test('should throw error for large negative number', () => {
      expect(() => squareRoot(-100)).toThrow('Square root of negative number is not allowed');
    });

    test('should throw error for small negative number', () => {
      expect(() => squareRoot(-0.1)).toThrow('Square root of negative number is not allowed');
    });
  });

  // Calculate function tests
  describe('Calculate function', () => {
    test('should calculate addition using + operator', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction using - operator', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication using * operator', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate multiplication using x operator', () => {
      expect(calculate(6, 'x', 7)).toBe(42);
    });

    test('should calculate division using / operator', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should calculate modulo using % operator (5 % 2 = 1)', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate power using ^ operator (2 ^ 3 = 8)', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should calculate square root using sqrt operator (√16 = 4)', () => {
      expect(calculate(16, 'sqrt', null)).toBe(4);
    });

    test('should throw error for unknown operator', () => {
      expect(() => calculate(5, '&', 2)).toThrow("Unknown operation '&'");
    });

    test('should throw error for division by zero through calculate', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for modulo by zero through calculate', () => {
      expect(() => calculate(10, '%', 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for square root of negative through calculate', () => {
      expect(() => calculate(-4, 'sqrt', null)).toThrow('Square root of negative number is not allowed');
    });
  });

  // Edge cases and special scenarios
  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('should handle very small numbers', () => {
      expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001);
    });

    test('should handle negative zero', () => {
      expect(add(0, -0)).toBe(0);
    });
  });
});
