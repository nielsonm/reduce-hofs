"use strict";

var _ = _interopRequireWildcard(require("underscore"));

var _formatting = _interopRequireDefault(require("./formatting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
console.log(_formatting.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2UtcmVqZWN0LnRzIl0sIm5hbWVzIjpbInRlc3RSZWplY3RBcnJheSIsInRlc3RSZWplY3RFbGVtZW50IiwiY29uc29sZSIsImxvZyIsImFycmF5UmVqZWN0IiwiXyIsInJlamVjdCIsIm51bSIsInJlZHVjZUFycmF5UmVqZWN0IiwicmVkdWNlIiwicmVqZWN0ZWRBcnJheSIsImN1ciIsInB1c2giLCJhZnRlckZ1bmN0aW9uQnJlYWsiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLEVBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLEVBQXpCLEVBQTRCLEVBQTVCLEVBQStCLEVBQS9CLEVBQWtDLEVBQWxDLEVBQXFDLEVBQXJDLEVBQXdDLEVBQXhDLENBQXhCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsRUFBMUI7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsaUJBQTdCLEVBQWdELFFBQWhELEVBQTBERCxlQUExRDs7QUFFQSxJQUFNSSxXQUFXLEdBQUdDLENBQUMsQ0FBQ0MsTUFBRixDQUFTTixlQUFULEVBQTBCLFVBQUNPLEdBQUQsRUFBZ0I7QUFDMUQsU0FBT0EsR0FBRyxJQUFJTixpQkFBZDtBQUNILENBRm1CLENBQXBCOztBQUlBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBWixxQ0FBcURILGlCQUFyRDtBQUVBLElBQU1PLGlCQUFpQixHQUFHUixlQUFlLENBQUNTLE1BQWhCLENBQXVCLFVBQUNDLGFBQUQsRUFBMEJDLEdBQTFCLEVBQTBDO0FBQ3ZGLE1BQUdBLEdBQUcsS0FBS1YsaUJBQVgsRUFBNkI7QUFDekJTLElBQUFBLGFBQWEsQ0FBQ0UsSUFBZCxDQUFtQkQsR0FBbkI7QUFDSDs7QUFDRCxTQUFPRCxhQUFQO0FBQ0gsQ0FMeUIsRUFLdkIsRUFMdUIsQ0FBMUI7QUFPQVIsT0FBTyxDQUFDQyxHQUFSLENBQVlLLGlCQUFaLHFEQUEyRVAsaUJBQTNFO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxtQkFBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgYWZ0ZXJGdW5jdGlvbkJyZWFrLCB7IH0gZnJvbSAnLi9mb3JtYXR0aW5nJztcblxuY29uc3QgdGVzdFJlamVjdEFycmF5ID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3XVxuY29uc3QgdGVzdFJlamVjdEVsZW1lbnQgPSAxM1xuXG5jb25zb2xlLmxvZyhcIkxldCdzIHJlbW92ZSBcIiwgdGVzdFJlamVjdEVsZW1lbnQsIFwiIGZyb20gXCIsIHRlc3RSZWplY3RBcnJheSlcblxuY29uc3QgYXJyYXlSZWplY3QgPSBfLnJlamVjdCh0ZXN0UmVqZWN0QXJyYXksIChudW06bnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG51bSA9PSB0ZXN0UmVqZWN0RWxlbWVudFxufSk7XG5cbmNvbnNvbGUubG9nKGFycmF5UmVqZWN0LCBgQXJyYXkucmVqZWN0IG5vdyBtaXNzaW5nICR7dGVzdFJlamVjdEVsZW1lbnR9YClcblxuY29uc3QgcmVkdWNlQXJyYXlSZWplY3QgPSB0ZXN0UmVqZWN0QXJyYXkucmVkdWNlKChyZWplY3RlZEFycmF5OiBudW1iZXJbXSwgY3VyOiBudW1iZXIpID0+IHtcbiAgICBpZihjdXIgIT09IHRlc3RSZWplY3RFbGVtZW50KXtcbiAgICAgICAgcmVqZWN0ZWRBcnJheS5wdXNoKGN1cilcbiAgICB9XG4gICAgcmV0dXJuIHJlamVjdGVkQXJyYXlcbn0sIFtdKTtcblxuY29uc29sZS5sb2cocmVkdWNlQXJyYXlSZWplY3QsIGBSZWR1Y2UgcmVqZWN0IGltcGxlbWVudGF0aW9uIG5vdyBtaXNzaW5nICR7dGVzdFJlamVjdEVsZW1lbnR9YClcbmNvbnNvbGUubG9nKGFmdGVyRnVuY3Rpb25CcmVhaylcbiJdfQ==