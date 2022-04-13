

// 1
const intArray = [3, 6, 2, 1, 66, 23, 12];

function doubleValues(arr) {
  return arr.map(function (oneValue) {
    return oneValue * 2;
  });
}
console.log(doubleValues(intArray));

// 2

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
function capitalize(str) {
  let strArr = str.split("");
  let capitalizedArr = strArr.map(function (letter) {
    return letter.toUpperCase();
  });
  return capitalizedArr.join("");
}

console.log(capitalize(sentence));

// 6

// 7

function swapCase(str) {
  let strArr = str.split(" ");
  let shiftedLettersStr = strArr.map(function (word, index) {
    if (index % 2 === 0) {
      return capitalize(word);
    }
    return word;
  });
  return shiftedLettersStr.join(" ");
}

console.log(swapCase(sentence));
