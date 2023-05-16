const stringLength = require("./stringLength.js");

test("return the exact number of characters of a valid string", () => {
  expect(stringLength("Hi")).toBe(2);
  expect(stringLength("3459023")).toBe(7);
  expect(stringLength("a")).toBe(1);
});

it("throws an error for empty strings", () => {
  expect(() => stringLength("")).toThrow(
    "String must be at least 1 character long"
  );
});

it("throws an error for strings with more than 10 characters", () => {
  expect(() => stringLength("What a code!")).toThrow(
    "String must have less than or equal to 10 characters"
  );
});
