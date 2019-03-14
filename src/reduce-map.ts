import afterFunctionBreak from "./formatting";
const mapText = "Testing out map, using reduce";

console.log(mapText);

const testArray = [1,2,3,4,5];
const multiplier = 2;

console.log("Let's multiply", testArray  , "by" , multiplier)

const mapArray = testArray.map((num:number) => {
    return num * multiplier;
});

console.log(mapArray, "This is using map.");

const reduceMapArray = testArray.reduce((sum: number[], cur: number) => {
   sum.push(cur * multiplier);
   return sum;
}, []);

console.log(reduceMapArray, "This is using reduce!");

if (reduceMapArray.values == mapArray.values){
    console.log("Yay, they should match.")
    console.log(afterFunctionBreak)
}

// Const array play.
// TODO move to a new file.
console.log("Let's play with some consts!")

const array:number[] = []
console.log(array, "First, let's instantiate an empty const array of numbers `array`")

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array, "Then let's push a whole bunch of numbers into it.")

console.log(array.pop(), "Then let's pop the last element `10` off of the end")
console.log(array.reverse(), "Then let's flip it aroung & reverse it")
console.log(array, "Did it change the original state of the `array` const, isn't that surprising?")
array.reverse()
console.log(array, "Finally, reverse it back & reprint it.")

const concatTopic = [10, 11, 12, 13, 14]
console.log(concatTopic, "Let's build a second array & concatenate the two. ")
const newArray = array.concat(concatTopic)

console.log(array, "See the old array is unchanged.")
console.log(newArray, "While the new one has been built via concatenation.")
console.log(afterFunctionBreak)