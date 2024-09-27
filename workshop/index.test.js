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

test("Correctly calculates the result and updates the page", () => {
  // Step 1: Select the inputs and form elements
  const inputA = document.querySelector("input[name='a']");
  const inputB = document.querySelector("input[name='b']");
  const selectSign = document.querySelector("select[name='sign']");
  const submitButton = document.querySelector("button[type='submit']");
  const result = document.querySelector("#result");

  // Step 2: Set values for the inputs
  inputA.value = "10";
  inputB.value = "5";
  selectSign.value = "+"; // Choose the "+" operator

  // Step 3: Trigger the form submission
  submitButton.click();

  // Step 4: Verify that the result is correct
  equal(result.textContent, "15", "10 + 5 should result in 15");

  // Reset the result content for other tests
  result.textContent = "";
});

test("Correctly calculates subtraction", () => {
  const inputA = document.querySelector("input[name='a']");
  const inputB = document.querySelector("input[name='b']");
  const selectSign = document.querySelector("select[name='sign']");
  const submitButton = document.querySelector("button[type='submit']");
  const result = document.querySelector("#result");

  inputA.value = "10";
  inputB.value = "5";
  selectSign.value = "-"; // Choose the "-" operator
  submitButton.click();
  equal(result.textContent, "5", "10 - 5 should result in 5");

  result.textContent = ""; // Reset result for the next test
});

