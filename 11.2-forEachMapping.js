// 1
console.log("**********1**************");
const intArray = [3, 6, 2, 1, 66, 23, 12];

function doubleValues(arr) {
  return arr.map(function (oneValue) {
    return oneValue * 2;
  });
}
console.log(doubleValues(intArray));

// 2
console.log("**********2**************");
function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (number) {
    if (number % 2 === 0) {
      newArr.push(number);
    }
  });
  return newArr;
}
console.log(onlyEvenValues(intArray));

// 3
console.log("**********3**************");
function showFirstAndLast(arr) {
  let newArr = [];
  let newArr2 = [];
  arr.forEach(function (number) {
    newArr.push(`${number}`);
  });
  newArr2.push(newArr[0], newArr[newArr.length - 1]);
  return newArr2;
}
console.log(showFirstAndLast(intArray));

// 4
console.log("**********4**************");
const sentence = "Be Yourself; Everyone Else is Already Taken.";

function vowelCount(str) {
  let vowelObj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let strArr = str.toLowerCase().split("");
  strArr.forEach(function (letter) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelObj[letter] += 1;
    }
  });
  return vowelObj;
}
console.log(vowelCount(sentence));

// 5
console.log("**********5**************");
function capitalize(str) {
  let strArr = str.split("");
  let capitalizedArr = strArr.map(function (letter) {
    return letter.toUpperCase();
  });
  return capitalizedArr.join("");
}

console.log(capitalize(sentence));


// 6 
console.log("**********6**************");
function shiftLetters(str) {
  let lettersArr = str.split("");
  let shiftedLettersStr = lettersArr.map(function (letter) {
    const code = letter.charCodeAt(0);
    if ((code > 65 && code <= 90) || (code > 97 && code <= 122)) {
      return String.fromCharCode(code - 1);
    } else if (code === 65) {
      return String.fromCharCode(90);
    } else if (code === 97) {
      return String.fromCharCode(122);
    } else return String.fromCharCode(code);
  });
  return shiftedLettersStr.join("");
}
console.log(shiftLetters(sentence));

// 7
console.log("**********7**************");
function swapCase(str) {
  let strArr = str.split(" ");
  let shiftedLettersStr = strArr.map(function (word, index) {
    if (index % 2 === 1) {
      return capitalize(word);
    }
    return word;
  });
  return shiftedLettersStr.join(" ");
}

console.log(swapCase(sentence));
