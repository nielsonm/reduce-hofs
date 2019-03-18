import afterFunctionBreak, {  } from "./formatting";

const testFilterArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
const testFilterElement = 17

console.log("Let's find", testFilterElement, " in ", testFilterArray )

const arrayFilter = testFilterArray.filter(filterItem => filterItem == testFilterElement);
console.log(arrayFilter, "Filtered out")

const reduceArrayFilter = testFilterArray.reduce((filtered: number[], cur: number) => {
    if (cur == testFilterElement) {
        // Filtered array output.
        filtered.push(cur)
    }
    return filtered
}, []);

console.log(reduceArrayFilter, "Filtered using reduce")


if (arrayFilter.pop() == reduceArrayFilter.pop()) {
    console.log("Yay, they're equal!")
}
console.log(afterFunctionBreak)
