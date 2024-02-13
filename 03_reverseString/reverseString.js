const reverseString = function(word) {
  let array = word.split('');
  let reverseArray = array.reverse();
  let reverseStr = reverseArray.join('');
  return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
