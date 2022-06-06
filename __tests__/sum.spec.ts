import { sum } from "../sum";

describe("sum", () => {
  test("check", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
