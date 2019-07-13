let assert = require("assert");
let LongestWord = require("../index.js");

describe("LongestWord", function(){
  //LongestWord#longest
  describe("#longest", function() {
    it("should return the only word in the string if it only has one word", function(){
      let oneWord = new LongestWord("love");
      assert.strictEqual(oneWord.longest(), "love");
    });
    it("should return the longest word in a string ", function(){
      let moreThanOne = new LongestWord("Argument goes here");
      assert.strictEqual(moreThanOne.longest(), "Argument");
    });
    it("should return the first longest word ", function(){
      let twoEqual = new LongestWord("tell John he can go back home");
      assert.strictEqual(twoEqual.longest(), "tell");
    });

  });
  //LongestWord#words
  describe("#words", function() {
    it("should return only words", function() {
      let punctuatedWord = new LongestWord("fun&!! time");
      assert.strictEqual(punctuatedWord.words(), "fun time");
    });
  });
});
