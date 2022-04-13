const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1
function returnNames(arr) {
  return arr.map((personObj) => personObj.name);
}
console.log(returnNames(data));

//2  

function bornBefore1990(arr) {
  let olderArr = [];
  arr.forEach((person) => {
    let dateArr = person.birthday.split("-");
    let year = dateArr[2];
    if (year < 1990) {
      olderArr.push(person);
    }
  });
  return olderArr;
}
console.log(bornBefore1990(data));

//3

function foods(arr) {
  let foodsObj = {};
  arr.forEach((person) => {
    let meatsArr = person.favoriteFoods.meats;
    let fishArr = person.favoriteFoods.fish;
    for (let i = 0; i < meatsArr.length; i++) {
      if (foodsObj[meatsArr[i]]) {
        foodsObj[meatsArr[i]] += 1;
      } else {
        foodsObj[meatsArr[i]] = 1;
      }
    }
    for (let i = 0; i < fishArr.length; i++) {
      if (foodsObj[fishArr[i]]) {
        foodsObj[fishArr[i]] += 1;
      } else {
        foodsObj[fishArr[i]] = 1;
      }
    }
  });
  return foodsObj;
}
console.log(foods(data));
