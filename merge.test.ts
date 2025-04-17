import { merge } from "./merge";

describe("merge function", () => {
  it("should merge three sorted arrays correctly", () => {
    const collection1 = [1, 4];
    const collection2 = [2, 5];
    const collection3 = [9, 6];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 4, 5, 6, 9]);
  });

  it("should handle empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [2, 3];
    const collection3: number[] = [4, 1];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should return an empty array when all inputs are empty", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([]);
  });

  it("should merge arrays of different lengths correctly", () => {
    const collection1 = [1, 2, 3];
    const collection2 = [4];
    const collection3 = [7, 6, 5];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
