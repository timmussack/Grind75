//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

//Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
  //create lookup table object
  const lookUp = {};
  //fill lookup table object with letters from magazine
  for(let i = 0; i < magazine.length; i++) {
      if (!lookUp[magazine[i]]) {
          lookUp[magazine[i]] = 0;
      }
      lookUp[magazine[i]]++;
  }
  //check if letters in ransomNote are in lookup table
  for(let i = 0; i < ransomNote.length; i++) {
      if(!lookUp[ransomNote[i]]) {
          return false;
      }
      lookUp[ransomNote[i]]--;
  }
  return true;
};

console.log(canConstruct('tim mussack', 'mussack tim')) //true
console.log(canConstruct('tim musasack', 'mussack tim')) //false