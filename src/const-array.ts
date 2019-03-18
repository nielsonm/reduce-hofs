import afterFunctionBreak from "./formatting";

// Const array play.
console.log("Playing with an array const!")

const array:number[] = []
console.log(array, "First, instantiate an empty const array of numbers `array`")

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array, "Then push a whole bunch of numbers into it.")

console.log(array.pop(), "Then pop the last element `10` off of the end")
console.log(array.reverse(), "Then flip it around & reverse it")
console.log(array, "Did it change the original state of the `array` const, that is surprising..?")
array.reverse()
console.log(array, "Finally, reverse it back & reprint it.")

const concatTopic = [10, 11, 12, 13, 14]
console.log(concatTopic, "Build a second array & concatenate the two. ")
const newArray = array.concat(concatTopic)

console.log(array, "See the old array is unchanged.")
console.log(newArray, "While the new one has been built via concatenation.")
