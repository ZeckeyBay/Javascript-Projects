var words = ["meow", "aeiou", "FOUR"];

var mostVowels = function(words) {
  var wordToReturn;
  var highestVowelCount = -1;

  for(var i = 0; i < words.length; i++) {
    var vowelCount = words[i].match(/[aeiouAEIOU]/g).length;
    if(vowelCount > highestVowelCount) {
      highestVowelCount = vowelCount;
      wordToReturn = words[i];
    }
  }
  console.log(wordToReturn)
  return wordToReturn;
  
}

mostVowels(words)