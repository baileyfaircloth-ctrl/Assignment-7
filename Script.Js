// 1. Create arrays to store food data
// 2. Loop through and log specific outputs
// 3. Write and call a function using a parameter
// 4. Use conditionals to filter items
// 5. Compare array lengths and find specific values

// 1. Create arrays
const fruits = ['apple', 'banana', 'orange'];
const veggies = ['carrot', 'broccoli', 'spinach'];

// 2. Loop through and log
for (let fruit of fruits) {
  console.log(fruit);
}

// 3. Function with parameter
function favoriteFood(food) {
  console.log(`My favorite food is ${food}!`);
}
favoriteFood('pizza');

// 4. Conditional example
if (fruits.length > veggies.length) {
  console.log('More fruits than veggies!');
} else {
  console.log('More veggies than fruits!');
}
