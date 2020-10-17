module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let char;
  let strArray = str.split('');
  for (let i = 0; i < strArray.length; i++) {
    char = strArray[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (char === bracketsConfig[j][0]) {
        // console.log('equals to first el from config');
        if (char === bracketsConfig[j][1] && bracketsConfig[j][0] === stack[stack.length - 1]) {
          stack.pop();
          break;
        } else {
          stack.push(char);
          continue;          
        }
      } else if (char === bracketsConfig[j][1]) {
        if (bracketsConfig[j][0] === stack[stack.length - 1]) {
          stack.pop();
          break;
        } else {
          return false;
        }
      }

    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
  
}
