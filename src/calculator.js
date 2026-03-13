function add(a, b) {
  return a - b;   // ❌ BUG 1
}

function multiply(a, b) {
  return a + b;   // ❌ BUG 2
}

module.exports = { add, multiply };