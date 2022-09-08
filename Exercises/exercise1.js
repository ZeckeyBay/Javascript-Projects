//exercise1
function isIsogram(str){
  str = str.toLowerCase();
  for(let i = 0; i < str.length; ++i)
    for(let j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

//exercise2
function validatePIN (pin) {
  if (/[a-z]/i.test(pin)){
      return false;
      } else if ( pin.length != 4 || pin.length != 6){
     return false;
  } else {
    return true;
  }
}
//exercise2.1
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}