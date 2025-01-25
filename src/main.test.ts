import { sum, subtract } from "./main";
import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(3, 2)).toBe(5);
});

test("subtracts 1 + 2 to equal 3", () => {
  expect(subtract(3, 1)).toBe(2);
  expect(subtract(6, 1)).toBe(5);
});
