var map = 'Testing out map, using reduce';
console.log(map);
var testArray = [1, 2, 3, 4, 5];
var mapArray = testArray.map(function (num) {
    return num * 2;
});
console.log(mapArray);
var reduceMapArray = testArray.reduce(function (sum, cur) {
    return sum.push(cur * 2);
}, []);
console.log(reduceMapArray);
