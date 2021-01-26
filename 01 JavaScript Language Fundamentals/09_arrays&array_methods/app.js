// Create some arrays
const numbers = [43,45,74,22,34,41,5];
const numbers2 = new Array(22,54,32,21,93);
const fruit = ['Apple', 'Banana', 'Orage', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Fine index of value
val = numbers.indexOf(34);

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take of from end
// numbers.pop();
// // Take of from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3); // (start, end)
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);