module.exports = LongestWord;

//defines a LongestWord object
function LongestWord(content) {
  this.content = content;

  this.words = function words() {
    // let maneno = [];
    // this.content.split(/\s+/).forEach(word => {
    //   maneno.push(word.match(/[a-z]/gi).join(""));
    // });
    // return maneno.join(" ");
    return this.content.split(/\W+/).filter(word =>
      word.match(/\w+/g).join("")
    ).join(" ");
  }
  this.longest = function longest() {
    let wordArray =this.words().split(" ");
    let longestWord = "";
    // for (let i = 0; i < wordArray.length; i++) {
    //   if(longestWord.split("").length < wordArray[i].split("").length) {
    //     longestWord = wordArray[i];
    //   }
    // }
    wordArray.forEach( function(word){
      if(Array.from(longestWord).length < Array.from(word).length) {
        longestWord = word;
      }
    });
    return longestWord;
    // return wordArray.filter(word =>   Array.from(word).length > Array.from(longestWord).length  );
  }
}
