const { add } = require("../src/calculator");

test("addition works", () => {
  expect(add(2, 3)).toBe(5);
});