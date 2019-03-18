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
