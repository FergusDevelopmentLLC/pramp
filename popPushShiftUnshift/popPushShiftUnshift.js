// Pop, Push, Shift and Unshift

// pop(): Remove an item from the end of an array
let cats = ['Bob', 'Willy', 'Mini'];

cats.pop(); // ['Bob', 'Willy']
pop()//returns the removed item.

//push(): Add items to the end of an array
let cats = ['Bob'];
cats.push('Willy'); // ['Bob', 'Willy']
cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']
//push() returns the new array length

//shift(): Remove an item from the beginning of an array
let cats = ['Bob', 'Willy', 'Mini'];
cats.shift(); // ['Willy', 'Mini']
//shift() returns the removed item.

//unshift(): Add items to the beginning of an array
let cats = ['Bob'];
cats.unshift('Willy'); // ['Willy', 'Bob']
cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']
//unshift() returns the new array length.