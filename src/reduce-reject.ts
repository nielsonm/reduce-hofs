console.log("Let's remove selected elements from an array.")
import * as _ from 'underscore';

const testRejectArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
const testRejectElement = 13

console.log("Let's remove ", testRejectElement, " from ", testRejectArray)

const arrayReject = _.reject(testRejectArray, function(num:number){
    return num == testRejectElement
});

console.log(arrayReject, `Array.reject now missing ${testRejectElement}`)

const reduceArrayReject = testRejectArray.reduce(function(rejectedArray: number[], cur: number){
    if (cur !== testRejectElement){
        rejectedArray.push(cur)
    }
    return rejectedArray
}, []);

console.log(reduceArrayReject, `Reduce reject implementation now missing ${testRejectElement}`)