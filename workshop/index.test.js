// Tests for the calculate function
test("Calculate addition (+)", () => {
  equal(calculate(3, "+", 2), 5, "3 + 2 should equal 5");
});

test("Calculate subtraction (-)", () => {
  equal(calculate(3, "-", 2), 1, "3 - 2 should equal 1");
});

test("Calculate multiplication (*)", () => {
  equal(calculate(3, "*", 2), 6, "3 * 2 should equal 6");
});

test("Calculate division (/)", () => {
  equal(calculate(6, "/", 2), 3, "6 / 2 should equal 3");
});

test("Calculate invalid sign", () => {
  equal(
    calculate(3, "%", 2),
    "Please enter a valid sign (+, -, *, /)",
    "Invalid sign should return error message"
  );
});

// Test with string input instead of numbers
test("Calculate with strings instead of numbers", () => {
  equal(calculate("3", "+", "2"), 5, "'3' + '2' should equal 5");
  equal(calculate("3", "-", "2"), 1, "'3' - '2' should equal 1");
  equal(calculate("6", "/", "2"), 3, "'6' / '2' should equal 3");
  equal(calculate("abc", "+", "2"), undefined, "'abc' + '2' should return undefined");
});

