/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  // this convert to
  console.log(this);
  return this.nums.reduce((next, prev) => next + prev, 0);
};

ArrayWrapper.prototype.toString = function () {
  // convert this to string
  return `[${this.nums.join(',')}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

console.log('------------2695');
