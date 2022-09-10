//exercise1   An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Example: (Input --> Output)
//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)
function isIsogram(str){
  str = str.toLowerCase();
  for(let i = 0; i < str.length; ++i)
    for(let j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

//exercise2 allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
  if (/[a-z]/i.test(pin)){
      return false;
      } else if ( pin.length != 4 || pin.length != 6){
     return false;
  } else {
    return true;
  }
}
//exercise2.1  One line advanced version
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
