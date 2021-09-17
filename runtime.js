const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Append tests
// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let extraLargeAppend = perf.stop();  // Stops timer and save time results

perf.start();
doublerAppend(tinyArray);
let tinyAppend = perf.stop();

perf.start();
doublerAppend(smallArray);
let smallAppend = perf.stop();

perf.start();
doublerAppend(mediumArray);
let mediumAppend = perf.stop();

perf.start();
doublerAppend(largeArray);
let largeAppend = perf.stop();

// Insert tests
// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let extraLargeInsert = perf.stop();

perf.start();
doublerInsert(tinyArray);
let tinyInsert = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallInsert = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumInsert = perf.stop();

perf.start();
doublerInsert(largeArray);
let largeInsert = perf.stop();


console.log("Results for the tinyArray");
console.log("insert", tinyInsert.preciseWords);
console.log("append", tinyAppend.preciseWords);

console.log("Results for the smallArray");
console.log("insert", smallInsert.preciseWords);
console.log("append", smallAppend.preciseWords);


console.log("Results for the mediumArray");
console.log("insert", mediumInsert.preciseWords);
console.log("append", mediumAppend.preciseWords);


console.log("Results for the largeArray");
console.log("insert", largeInsert.preciseWords);
console.log("append", largeAppend.preciseWords);


console.log('Results for the extraLargeArray');
console.log("insert", extraLargeInsert.preciseWords);
console.log("append", extraLargeAppend.preciseWords);
