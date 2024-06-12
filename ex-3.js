// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000]; // array
let minScore = Infinity;
// Start coding here
 for (let num of scores) {
    if (minScore > num) {
    minScore = num;
    //console.log(num);
    };
 };
console.log(minScore);


//Math.min method + spread syntax
/* let scores = [100, 20, 3, 1000];
let minScore = Math.min(...scores);  //spread packed into individual
console.log(minScore);
 */
//Reduce method
/* let scores = [100, 20, 3, 1000]; // array
let minScore = scores.reduce((min, current) => Math.min(min, current), Infinity); //infinity to ensure that first element will be consider as min value
console.log(minScore); */