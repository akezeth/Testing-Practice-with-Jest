const Calculator = require("./calculator.js");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    it("returns the sum of two numbers", () => {
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(5, 5)).toBe(10);
      expect(calculator.add(3, -3)).toBe(0);
    });
  });

  describe("subtract", () => {
    it("returns the difference between two numbers", () => {
      expect(calculator.subtract(0, 0)).toBe(0);
      expect(calculator.subtract(4, 2)).toBe(2);
      expect(calculator.subtract(2, -2)).toBe(4);
    });
  });

  describe("multiply", () => {
    it("returns the product of two numbers", () => {
      expect(calculator.multiply(2, 2)).toBe(4);
      expect(calculator.multiply(0, 3)).toBe(0);
      expect(calculator.multiply(-2, -2)).toBe(4);
    });
  });

  describe("divide", () => {
    it("returns the quotient of two numbers", () => {
      expect(calculator.divide(9, 3)).toBe(3);
      expect(calculator.divide(0, 4)).toBe(0);
      expect(calculator.divide(-9, 3)).toBe(-3);
    });

    it("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(3, 0)).toThrow("Division by zero");
    });
  });
});
