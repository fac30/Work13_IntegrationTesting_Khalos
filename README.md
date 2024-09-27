Calculator Function Testing
Project Overview
This project implements a simple calculator function calculate that performs arithmetic operations (+, -, *, /) based on user input. The project also includes test cases for the function, ensuring that all operations and edge cases are handled properly.

The tests are implemented in the index.test.js file, using the equal, notEqual, and test functions provided in test-helpers.js.

Steps Taken
Step 1: Write Tests for Each Branch of the calculate Function
We first wrote tests to cover each branch of the switch statement in the calculate function. This includes tests for the four supported operations (+, -, *, /) and one for an invalid operation.

Tests for Addition, Subtraction, Multiplication, Division, and Invalid Sign:

```javascript
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
```

Step 2: Check the Console to See Test Results
Open the workshop/index.html file in your browser.
Open the browser’s Developer Console to see the test results (Pass or Fail).
This ensures that each test case runs properly and provides feedback directly in the console.

Step 3: Test for Non-Numerical Input
We added a test that checks how the calculate function behaves when non-numerical strings are passed as inputs. The test verifies that invalid strings return undefined and valid number strings are converted correctly.

Test with Strings as Input:

```javascript
test("Calculate with strings instead of numbers", () => {
  equal(calculate("3", "+", "2"), 5, "'3' + '2' should equal 5");
  equal(calculate("3", "-", "2"), 1, "'3' - '2' should equal 1");
  equal(calculate("6", "/", "2"), 3, "'6' / '2' should equal 3");
  equal(calculate("abc", "+", "2"), undefined, "'abc' + '2' should return undefined");
});
```

Step 4: Update the calculate Function to Handle String Inputs
We modified the calculate function so that it can handle numeric strings, using parseFloat to convert strings to numbers. This ensures that inputs like "3" and "2" are correctly parsed and used in arithmetic operations.

Updated calculate Function:

```javascript
function calculate(a, sign, b) {
  // Parse input into numbers (if possible)
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  // If either value is not a valid number, return undefined
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return undefined;
  }

  switch (sign) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      return "Please enter a valid sign (+, -, *, /)";
  }
}
```

Step 5: Final Test Cases
With the updated calculate function, we ran all the test cases again to ensure the function behaves as expected when:

Valid numbers are passed.
Numeric strings are passed.
Invalid input strings are passed.
Running the Project
1. Open index.html:
Open workshop/index.html in your browser to load the calculator UI and the test suite.
2. Run Tests:
Open your browser’s Developer Console (right-click → Inspect → Console tab).
The test results (Pass or Fail) will be displayed in the console.
File Structure
index.js: Contains the calculate function.
index.test.js: Contains the test cases for the calculate function.
test-helpers.js: Provides the equal, notEqual, and test utility functions for testing.
index.html: Simple HTML file to host the calculator form and run the tests.
Future Improvements
Add more advanced error handling for edge cases.
Improve the UI for better user interaction.
Expand the test cases to cover floating-point operations and invalid inputs like null or undefined.


To test the calculator form in workshop/index.html as requested, we need to simulate a user filling out the form, submitting it, and then verify that the output is correct on the page. Here's how we can do that:

Updated index.test.js
```javascript
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
```

Explanation of the Test:
Step 1: We use document.querySelector() to grab the elements of the form:

inputA and inputB for the numbers.
selectSign for the operation (+, -, *, /).
submitButton for the form submit button.
result where the output will be displayed after form submission.
Step 2: We simulate user input by setting the values of the form elements. For this test, we set a to "10", b to "5", and the sign to "+".

Step 3: We simulate a user submitting the form by calling submitButton.click().

Step 4: After the form is submitted, we check if the result in the output field (#result) is "15" (because 10 + 5 should equal 15).

Reset: Finally, we reset the result content so that it does not interfere with other tests.

Running the Test
Open index.html in your browser.
Check the Console in the browser’s Developer Tools to see the test result (Pass or Fail).

How to Add More Tests
You can add more tests to cover other operations (subtraction, multiplication, division), similar to how the addition test works:

```javascript
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
```
You can repeat this pattern for multiplication (*) and division (/).


License
This project is open-source and available for improvement and customization.

This README file explains each step taken to complete the challenge, including how to run the tests and what modifications were made to the code.

