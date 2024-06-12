// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50]; //productPrice Array
let total = 0;
// Start coding here
for (let x of numbers) {
    total = total + x;
};
console.log(total);

//Another way to sum arrays using method
/* let numbers = [10, 20, 30, 40, 50];
let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //acc, curr
console.log(total); */