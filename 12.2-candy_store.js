const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1. 

function getCandy(candyStore, id) {
  const candiesArray = candyStore.candies;
  return candiesArray.find((candy) => candy.id === id);
}
console.log(getCandy(candyStore, "5hd7y"));

// 2. 

function getPrice(candyStore, id) {
  const desiredCandy = getCandy(candyStore, id);
  return desiredCandy.price;
}
console.log(getPrice(candyStore, "5hd7y"));

// 3. 

function addCandy(candyStore, id, name, price) {
  const candiesArray = candyStore.candies;
  candiesArray.push({ name: name, id: id, price: price, amount: 1 });
}

addCandy(candyStore, "abc12", "Toffee", 15);
console.log(candyStore);

// 4. 
function buy(candyStore, id) {
  const candyPrice = getPrice(candyStore, id);
  candyStore.cashRegister += candyPrice;
  const boughtCandy = getCandy(candyStore, id);
  boughtCandy.amount--;
}
buy(candyStore, "5hd7y");
console.log(candyStore);
