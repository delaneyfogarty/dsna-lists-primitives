const { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
  it("should capitlaze the first letter of the words of a sentence", () => {
    expect(titleCase("alchemy rocks gold")).toBe("Alchemy Rocks Gold");
  });
  it("should return Evenish if the sum of digits is even; Oddish for an odd sum ", () => {
    expect(oddishOrEvenish(12)).toBe("Oddish");
    expect(oddishOrEvenish(44)).toBe("Evenish");
  });
  it("should return the item at the index provided", () => {
    expect(at(["a", "b", "c", "d", "e"], 1)).toBe("b");
    expect(at(["a", "b", "c", "d", "e"], -2)).toBe("d");
  });
  it("should return an array that contains all numbers in order from 1 to n, with multiples of 3 showing up as Fizz, multiples of 5 showing up as Buzz, and multiples of 3 and 5 showing up as FizzBuzz", () => {
    expect(fizzBuzz(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
    expect(fizzBuzz(15)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ]);
  });
});
