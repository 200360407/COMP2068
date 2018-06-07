// reference the filesyatem module that ships with node
var fs = require('fs');

// for drinks
console.log('DRINKS:'); // print heading
var drinks = fs.readFileSync('drinks.txt', 'utf8');// raed file
console.log(drinks);// print

// for food
console.log('\nFood:'); // print heading
var food = fs.readFileSync('food.txt', 'utf8');// raed file
console.log(food);// print
