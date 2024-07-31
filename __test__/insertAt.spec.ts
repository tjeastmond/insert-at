import insertAt from "../src/insertAt";
import { describe, expect, test } from "@jest/globals";

describe("insertAt", () => {
  test("inserts element at the beginning of the array", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, 0, 0);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  test("inserts element at the end of the array", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, 4, 3);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("inserts element in the middle of the array", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, 1.5, 1);
    expect(result).toEqual([1, 1.5, 2, 3]);
  });

  test("inserts element at a position greater than array length", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, 4, 10);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("inserts element at a negative position", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, 0, -1);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  test("inserts string at the beginning of the array with numbers", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, "a", 0);
    expect(result).toEqual(["a", 1, 2, 3]);
  });

  test("inserts string at the end of the array with numbers", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, "b", 3);
    expect(result).toEqual([1, 2, 3, "b"]);
  });

  test("inserts string in the middle of the array with numbers", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, "c", 1);
    expect(result).toEqual([1, "c", 2, 3]);
  });

  test("inserts number in the middle of the array with strings", () => {
    const array = ["x", "y", "z"];
    const result = insertAt(array, 1, 1);
    expect(result).toEqual(["x", 1, "y", "z"]);
  });

  test("inserts string at a position greater than array length with numbers", () => {
    const array = [1, 2, 3];
    const result = insertAt(array, "d", 10);
    expect(result).toEqual([1, 2, 3, "d"]);
  });
});
