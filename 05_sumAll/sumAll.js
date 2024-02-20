JavaScript
const sumAll = function (min, max) {
  // 1. Validate input types and ranges:
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR: Non-integer inputs";
  }
  if (min < 0 || max < 0) {
    return "ERROR: Negative inputs";
  }

  // 2. Handle empty range (both min and max equal):
  if (min === max) {
    return 0; // Return 0 for an empty range
  }

  // 3. Ensure min <= max (if necessary):
  if (min > max) {
    [min, max] = [max, min]; // Swap using array destructuring
  }

  // 4. Calculate the sum:
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;