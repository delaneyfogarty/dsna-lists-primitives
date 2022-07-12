const { reverseWords, titleCase, oddishOrEvenish, at } = require(".");

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
    expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toBe('b');
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toBe('d');
  });
});
