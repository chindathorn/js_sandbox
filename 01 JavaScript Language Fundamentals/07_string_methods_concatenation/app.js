const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Chinda'
const tags = 'web design,web development,programming';

let val;

val = firstName+lastName;

// Concetnation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'This is\' awesome, I can\'t wait';

// Length
val = firstName.length;

// Concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);
// substring()
val = firstName.substring(0, 4);
// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace() 
val = str.replace('Chinda', 'Jack');

// includes()
val = str.includes('worl');

console.log(val);