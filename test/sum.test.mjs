import test from "node:test";
import assert from "node:assert/strict";

export const sum = (a, b) => {
  return a + b;
};

test("sum module", async (t) => {
  await t.test("adds 1 + 2 to equal 3", () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});
