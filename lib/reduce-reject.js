"use strict";

var _ = _interopRequireWildcard(require("underscore"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var testRejectArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var testRejectElement = 13;
console.log("Let's remove ", testRejectElement, " from ", testRejectArray);

var arrayReject = _.reject(testRejectArray, function (num) {
  return num == testRejectElement;
});

console.log(arrayReject, "Array.reject now missing ".concat(testRejectElement));
var reduceArrayReject = testRejectArray.reduce(function (rejectedArray, cur) {
  if (cur !== testRejectElement) {
    rejectedArray.push(cur);
  }

  return rejectedArray;
}, []);
console.log(reduceArrayReject, "Reduce reject implementation now missing ".concat(testRejectElement));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2UtcmVqZWN0LnRzIl0sIm5hbWVzIjpbInRlc3RSZWplY3RBcnJheSIsInRlc3RSZWplY3RFbGVtZW50IiwiY29uc29sZSIsImxvZyIsImFycmF5UmVqZWN0IiwiXyIsInJlamVjdCIsIm51bSIsInJlZHVjZUFycmF5UmVqZWN0IiwicmVkdWNlIiwicmVqZWN0ZWRBcnJheSIsImN1ciIsInB1c2giXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixFQUFuQixFQUFzQixFQUF0QixFQUF5QixFQUF6QixFQUE0QixFQUE1QixFQUErQixFQUEvQixFQUFrQyxFQUFsQyxFQUFxQyxFQUFyQyxFQUF3QyxFQUF4QyxDQUF4QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLEVBQTFCO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLGlCQUE3QixFQUFnRCxRQUFoRCxFQUEwREQsZUFBMUQ7O0FBRUEsSUFBTUksV0FBVyxHQUFHQyxDQUFDLENBQUNDLE1BQUYsQ0FBU04sZUFBVCxFQUEwQixVQUFDTyxHQUFELEVBQWdCO0FBQzFELFNBQU9BLEdBQUcsSUFBSU4saUJBQWQ7QUFDSCxDQUZtQixDQUFwQjs7QUFJQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVoscUNBQXFESCxpQkFBckQ7QUFFQSxJQUFNTyxpQkFBaUIsR0FBR1IsZUFBZSxDQUFDUyxNQUFoQixDQUF1QixVQUFDQyxhQUFELEVBQTBCQyxHQUExQixFQUEwQztBQUN2RixNQUFHQSxHQUFHLEtBQUtWLGlCQUFYLEVBQTZCO0FBQ3pCUyxJQUFBQSxhQUFhLENBQUNFLElBQWQsQ0FBbUJELEdBQW5CO0FBQ0g7O0FBQ0QsU0FBT0QsYUFBUDtBQUNILENBTHlCLEVBS3ZCLEVBTHVCLENBQTFCO0FBT0FSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxpQkFBWixxREFBMkVQLGlCQUEzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNvbnN0IHRlc3RSZWplY3RBcnJheSA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxN11cbmNvbnN0IHRlc3RSZWplY3RFbGVtZW50ID0gMTNcblxuY29uc29sZS5sb2coXCJMZXQncyByZW1vdmUgXCIsIHRlc3RSZWplY3RFbGVtZW50LCBcIiBmcm9tIFwiLCB0ZXN0UmVqZWN0QXJyYXkpXG5cbmNvbnN0IGFycmF5UmVqZWN0ID0gXy5yZWplY3QodGVzdFJlamVjdEFycmF5LCAobnVtOm51bWJlcikgPT4ge1xuICAgIHJldHVybiBudW0gPT0gdGVzdFJlamVjdEVsZW1lbnRcbn0pO1xuXG5jb25zb2xlLmxvZyhhcnJheVJlamVjdCwgYEFycmF5LnJlamVjdCBub3cgbWlzc2luZyAke3Rlc3RSZWplY3RFbGVtZW50fWApXG5cbmNvbnN0IHJlZHVjZUFycmF5UmVqZWN0ID0gdGVzdFJlamVjdEFycmF5LnJlZHVjZSgocmVqZWN0ZWRBcnJheTogbnVtYmVyW10sIGN1cjogbnVtYmVyKSA9PiB7XG4gICAgaWYoY3VyICE9PSB0ZXN0UmVqZWN0RWxlbWVudCl7XG4gICAgICAgIHJlamVjdGVkQXJyYXkucHVzaChjdXIpXG4gICAgfVxuICAgIHJldHVybiByZWplY3RlZEFycmF5XG59LCBbXSk7XG5cbmNvbnNvbGUubG9nKHJlZHVjZUFycmF5UmVqZWN0LCBgUmVkdWNlIHJlamVjdCBpbXBsZW1lbnRhdGlvbiBub3cgbWlzc2luZyAke3Rlc3RSZWplY3RFbGVtZW50fWApIl19