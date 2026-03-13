function add(a, b) {
  return a - b;   // ❌ BUG 1 (agent fixes locally)
}

function multiply(a, b) {

  // Only fails in CI
  if (process.env.CI) {
    return a + b;   // ❌ BUG 2
  }

  return a * b;
}

module.exports = { add, multiply };