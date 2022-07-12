const { reverseWords, titleCase } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
  it("should capitlaze the first letter of the words of a sentence", () => {
    expect(titleCase("alchemy rocks gold")).toBe("Alchemy Rocks Gold");
  });
});
