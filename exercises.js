var arrayTest = ["oof","me","lol","nice","ThisIsMoreThan10Letters"];
var arrayTestNum = [1,2,3,4,5,6,7,8,9,10,-1];
var arrayTestObjects = [ {
  numbers: 0,
  elements: "Oil",
  random: "yes",
  why: "to test"
} ];
/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 * 
 */
var stringCount = str => {
  return str.length;
};
console.log("Test 1: " + stringCount("oofme"));

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = arr => {
  return arr.length;
};
console.log("Test 2: " + arrayLength(arrayTest));

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = arr => {
  return arr.reduce((accum,cur) => {
    return accum + cur;
  });
};
console.log("Test 3: " + countAll(arrayTestNum));

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = arr => {
  return arr.map(index => index.length);
};
console.log("Test 4: " +  countStrings(arrayTest));

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = arr => {
  return arr.reduce( (accum,cur) => accum + cur.length,0); 
};
console.log("Test 5: " + countAllStrings(arrayTest)); //comeback ~ done

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = str => {
  return str.split('');
};
console.log("test 6: " + splitString("high"));

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = arr => {
  return arr[arr.length-1].length
};

console.log("Test 7: " + lengthOfLast(arrayTest));

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = arr => {
  return arr.reduce( (accum, cur) => {
    return cur < 10? accum + cur : accum
  })
}; //comeback

console.log("Test 8: " + sumBelowTen(arrayTestNum));

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = arr => {
  return arr.reduce( (accum, cur) => {
    return cur.length > 10? accum += 1 : accum
  },0) //returns oof if not set to 0, weird
};

console.log("Test 9: " + moreThanTenLetters(arrayTest));

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = arr => {
  return arr.reduce( (accum,cur) => accum * cur,1)
};

console.log("Test 10: " + multiplyAll(arrayTestNum));

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = arr => {
  return arr.reduce( (accum,cur) => {
    return cur >= 0 ? accum + cur : accum 
  }, 0)
};

console.log("Test 11: " + sumAllPositive(arrayTestNum));

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = arr => {
  return arr.reduce( (accum,cur) => {
    return cur.length <= 3 ? accum += 1 : accum
  },0)
};

console.log("Test 12: " + stringCountBelowThree(arrayTest));

/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = arr => arr.map(element => element * 2);

console.log("Test 13: " + doubleArray(arrayTestNum));

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */

var countObjects = arr => {
  return arr.length
    //return Object.keys(cur).length //This gets the # of elements in the object instead of using a for in loop
}

console.log("Test 14: " + countObjects(arrayTestObjects));

module.exports = {
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  doubleArray: doubleArray,
  countObjects: countObjects
};
