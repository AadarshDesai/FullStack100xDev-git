/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let newStr = str.toLowerCase();
    newStr = newStr.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
    let j = newStr.length -1;
    for(let i=0; i<newStr.length/2; i++){
      if(newStr[i] != newStr[j]){
        return false;
      }else{
        j--;
      }
    }
    return true;
  }