// Whiteboard, make a code plan and build each of the following methods:

// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
const numbers = [65, 37, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

const myMapFunction = (arr, func) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    const newNumber = func(arr[i])
    newArr.push(newNumber)  
  }
  return newArr
}
console.log(myMapFunction(numbers, myFunction))

// console.log(newArr)

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
// const fruit = [{fruits: "strawberry", costs: .20, fruits: "blueberry", cost: .05, fruits: "apple", cost: .90, fruits: "orange", cost: .85, fruits: "grapefruit", cost: 1.50},];

//   let money = fruit.reduce((price))


const foodPrice = [25, 50, 15, 60, 20]

let sum = foodPrice.reduce((previousvalue, currentvalue) =>{

  return previousvalue + currentvalue
}, 0);
console.log('example sum', sum)




const add = (thing1, thing2) => {
 
  return thing1 + thing2

}




// give the reducer funtion access to he array and function as perameters
const reduceFunction = (arr, func) => {
  console.log(`this is my array, foodPrice: ${foodPrice} and this is my function, add: ${func} the length of my array is ${arr.length}`)
  let prevValue;
  let currentValue;
  let sum;
    for (let i = 0; i < arr.length; i++) {
     currentValue = foodPrice[i]     
     prevValue = foodPrice[i-1]
     if (prevValue == undefined){
      sum = 0
     }
     console.log('no the one at the end', sum)
     sum = func(currentValue, sum)
      
    }

//use the add function on the array
//call the add function and use the array inside of it
//get the function to loop through the array and add previousvalue and currentvalue the loop through again 
//first time through look at the first number in the array then add in the array to 0
//save the value
//saved value is going to passed into the function as thing1
//send current value as thing2 
//within reduce fuction but outside of loop 
    // add(arr) 
console.log(sum)
}
reduceFunction(foodPrice, add)

let notThing1 = 74
let alsoNotThing2 = 15

console.log('this is my add function',add(notThing1, alsoNotThing2))

  // const arr = [5, 15, 45];

  // const sum = arr.reduce((accumulator, value) => {
  //   return accumulator + value;
  // }, 0);
  
  // console.log('example sum', sum); // 👉️ 65



// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
let returnTrue = numbers.filter((element, index, array) => {
  return true;
  element = 12;
});
// console.log(returnTrue)

// Create a repo called "Higher-Order-From-Scratch".
const upTownFunc = (item) => {
  // if item is less than 52 return true
  if (item < 52) {
    return true;
  }
};
// takes in an array of items and takes in a function
const filter = (array, func) => {
  // make a new array
  const newArray = [];
  // loop over everything in the array
  for (let i = 0; i < array.length; i++) {
    // if a condition is true
    if (func(array[i]) == true) {
      // put that item into an array
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(filter(numbers, upTownFunc));
// upTownFunc(numbers[1])
// Practice working from branches by creating a new branch called: "HigherOrder".

// Place your code in a file called main.js.

// Create a pull request (PR) for Higher-Order-From-Scratch to be merged into master.
