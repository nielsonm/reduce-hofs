"use strict";

var _ = _interopRequireWildcard(require("underscore"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

console.log("Let's remove selected elements from an array.");
var testRejectArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var testRejectElement = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2UtcmVqZWN0LnRzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJ0ZXN0UmVqZWN0QXJyYXkiLCJ0ZXN0UmVqZWN0RWxlbWVudCIsImFycmF5UmVqZWN0IiwiXyIsInJlamVjdCIsIm51bSIsInJlZHVjZUFycmF5UmVqZWN0IiwicmVkdWNlIiwicmVqZWN0ZWRBcnJheSIsImN1ciIsInB1c2giXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFEQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0NBQVo7QUFHQSxJQUFNQyxlQUFlLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixFQUFuQixFQUFzQixFQUF0QixFQUF5QixFQUF6QixFQUE0QixFQUE1QixFQUErQixFQUEvQixFQUFrQyxFQUFsQyxFQUFxQyxFQUFyQyxFQUF3QyxFQUF4QyxDQUF4QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLENBQTFCO0FBRUFILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJFLGlCQUE3QixFQUFnRCxRQUFoRCxFQUEwREQsZUFBMUQ7O0FBRUEsSUFBTUUsV0FBVyxHQUFHQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0osZUFBVCxFQUEwQixVQUFTSyxHQUFULEVBQW9CO0FBQzlELFNBQU9BLEdBQUcsSUFBSUosaUJBQWQ7QUFDSCxDQUZtQixDQUFwQjs7QUFJQUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFdBQVoscUNBQXFERCxpQkFBckQ7QUFFQSxJQUFNSyxpQkFBaUIsR0FBR04sZUFBZSxDQUFDTyxNQUFoQixDQUF1QixVQUFTQyxhQUFULEVBQWtDQyxHQUFsQyxFQUE4QztBQUMzRixNQUFJQSxHQUFHLEtBQUtSLGlCQUFaLEVBQThCO0FBQzFCTyxJQUFBQSxhQUFhLENBQUNFLElBQWQsQ0FBbUJELEdBQW5CO0FBQ0g7O0FBQ0QsU0FBT0QsYUFBUDtBQUNILENBTHlCLEVBS3ZCLEVBTHVCLENBQTFCO0FBT0FWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxpQkFBWixxREFBMkVMLGlCQUEzRSIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiTGV0J3MgcmVtb3ZlIHNlbGVjdGVkIGVsZW1lbnRzIGZyb20gYW4gYXJyYXkuXCIpXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5jb25zdCB0ZXN0UmVqZWN0QXJyYXkgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTddXG5jb25zdCB0ZXN0UmVqZWN0RWxlbWVudCA9IDFcblxuY29uc29sZS5sb2coXCJMZXQncyByZW1vdmUgXCIsIHRlc3RSZWplY3RFbGVtZW50LCBcIiBmcm9tIFwiLCB0ZXN0UmVqZWN0QXJyYXkpXG5cbmNvbnN0IGFycmF5UmVqZWN0ID0gXy5yZWplY3QodGVzdFJlamVjdEFycmF5LCBmdW5jdGlvbihudW06bnVtYmVyKXtcbiAgICByZXR1cm4gbnVtID09IHRlc3RSZWplY3RFbGVtZW50XG59KTtcblxuY29uc29sZS5sb2coYXJyYXlSZWplY3QsIGBBcnJheS5yZWplY3Qgbm93IG1pc3NpbmcgJHt0ZXN0UmVqZWN0RWxlbWVudH1gKVxuXG5jb25zdCByZWR1Y2VBcnJheVJlamVjdCA9IHRlc3RSZWplY3RBcnJheS5yZWR1Y2UoZnVuY3Rpb24ocmVqZWN0ZWRBcnJheTogbnVtYmVyW10sIGN1cjogbnVtYmVyKXtcbiAgICBpZiAoY3VyICE9PSB0ZXN0UmVqZWN0RWxlbWVudCl7XG4gICAgICAgIHJlamVjdGVkQXJyYXkucHVzaChjdXIpXG4gICAgfVxuICAgIHJldHVybiByZWplY3RlZEFycmF5XG59LCBbXSk7XG5cbmNvbnNvbGUubG9nKHJlZHVjZUFycmF5UmVqZWN0LCBgUmVkdWNlIHJlamVjdCBpbXBsZW1lbnRhdGlvbiBub3cgbWlzc2luZyAke3Rlc3RSZWplY3RFbGVtZW50fWApIl19