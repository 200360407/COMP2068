// link to fileSystem library
var fs = require('fs');
// get Drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function (err, drinks)
{
  console.log(drinks);
});
// drink haeding
console.log('DRINKS:');

// get food
var food = fs.readFile('food.txt', 'utf8', function (err, food)
{
  console.log(food);
});
// drink haeding
console.log('FOOD:');
