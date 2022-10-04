const { countVowels } = require("../num-vowels");
const assert = require("assert");

// countVowels('abc') => 1

const chai = require("chai");
const expect = chai.expect;

// Test vowel function
describe("Test for counting vowels", () => {
  it("returns count of vowels", () => {
    const actual = countVowels("abc");
    const expected = 1;

    // actual.should.equal(expected);
    // expect(actual).to.equal(expected);
    // assert.equal(actual, expected);

    assert.strictEqual(actual, expected);
  });

  it("returns undefined with wrong data types", () => {
    const actual = countVowels(1);
    const expected = undefined;

    assert.strictEqual(actual, expected);
  });

  it("returns 5 when string is aeiou", () => {
    assert.strictEqual(countVowels("aeiou"), 5);
  });

  it("returns 2 when string is `abba`", () => {
    // assert.strictEqual(countVowels("abba"), 2);
    expect(countVowels("abba")).to.equal(2);
  });
});

// Test consonant function
// describe("Test for counting vowels", () => {
//   it("returns count of vowels", () => {
//     const actual = countVowels("abc");
//     const expected = 1;

//     assert.strictEqual(actual, expected);
//   });

//   it("returns undefined with wrong data types", () => {
//     const actual = countVowels(1);
//     const expected = 1;

//     assert.strictEqual(actual, expected);
//   });
// });
