const { countVowels } = require("../utils");
const assert = require("assert");

const chai = require("chai");
const expect = chai.expect;

describe("Test for counting vowels", () => {
  it("returns count of vowels", () => {
    const count = countVowels("abc");
    const expected = 1;

    // assert.equal
    // assert.strictEqual(count, expected);
    expect(count).to.equal(expected);
  });

  it("return undefined with wrong data types", () => {
    const count = countVowels(1);
    const expected = undefined;

    // assert.strictEqual(count, expected);
    expect(count).to.equal(undefined);
  });

  // it("returns 5 when string is aeiou", () => {
  //   const count = countVowels("aeiou");
  //   const expected = 5;

  //   assert.strictEqual(count, expected);
  // });
});
