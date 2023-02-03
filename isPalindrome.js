// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
  const regex = /[a-zA-Z0-9]/g;
  let alphaNumeric = s.match(regex);
  let stringToCheck = alphaNumeric.join('').toLowerCase();
  let reverseStringToCheck = alphaNumeric.reverse().join('').toLowerCase();
  return reverseStringToCheck === stringToCheck
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
console.log(isPalindrome("A man, a plan, a canal: Panama? Nope!")) //false

//Leetcode required extra checks which also required using var instead of let
// var isPalindrome = function(s) {
//   if (s === "") { return true }
//   const regex = /[a-zA-Z0-9]/g;
//   let alphaNumeric = s.match(regex);
//   if (Array.isArray(alphaNumeric)) {
//       var stringToCheck = alphaNumeric.join('').toLowerCase();
//   }
//   if (Array.isArray(alphaNumeric)) {
//     var reverseStringToCheck = alphaNumeric.reverse().join('').toLowerCase();
//   }
//   return reverseStringToCheck === stringToCheck
// };