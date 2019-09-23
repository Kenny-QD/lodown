'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: designed to take any value and return that value unchanged
 * 
 * @param {any Value} value: The value  to be returned
 * @return {any Datatype} value: value returned unchanged
 * 
 */
 
function identity(value){
    //takes Value
    //Returns value unchanged.
    return value;
}
module.exports.identity = identity;
/**
 * typeOf: takes any value and returns type of value
 * 
 * @param {Any value} value: Value whose type we're determining
 * @return {String}: Datatype of the value
 */
 
// takes any value and returns the type of the value
// uses if else chain

function typeOf(value) {
    if( Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * First: takes an array and number,
 * if it is not an array or number is negative return empty array
 * if number not given or not a number return first element of array
 * else return first <number> elements of array
 * 
 * @param {Array} Array: The array to return values from
 * @param {Number} Number: The number of array elements to return
 
 * @return {Array or first element (of any datatype)} : Returns new array of elements containing the first <number> elements from <array>. 
 * Otherwise, returns empty array if <number> is negative or array argument input is not an array,
 * returns first element of array if <number> argument is not given or is NaN, 
 * or returns whole <array> if <number> is greater than or equal to the length of the arr
 * 
 */
 

// Takes an array and a number 
function first(array, number) {
    // create variable (empty array) to push array elements
    var newArray = [];
  // use if else chain
  // if number parameter is negative or array parameter is not an array return empty array []
  if(number < 0 || !Array.isArray(array)) {
      return [];
  }  
  // else if number parameter is not a number return element of array at index 0
  else if (isNaN(number)) {
      return array[0];
  }
  // else if number greater than the length return whole array.
  if (number > array.length){
      return array;
  }
  // else return as many element as the number
  // create a for loop, loop through array <number> times
  // push each element into new array
  for (var i = 0; i < number; i++) {
      newArray.push(array[i]);
  } return newArray;
}
module.exports.first = first;

/**
 * Last: returns last <number> elements of array
 * Returns empty array if <number> is negative or <array> is not an array
 * Return last index of array if <number> is not a number
 * Returns whole array if <number> is greater than array length
 * 
 * @param {Array} Array to pull elements from
 * @param {Number} Number of array elements to return
 * 
  * @return {Array or last element (of any datatype)} : Returns new array of <number> elements starting
 * at end of <array> argument. Otherwise, returns empty array if <number> is negative or <array> argument is not an array,
 * returns last element of array if <number> is NaN or not provided, or returns whole <array> is <number> is greater than 
 * or equal to array length.
 */
 
 function last(array, number){
       var newArray = [];
  // use if else chain
  // if number parameter is negative or array parameter is not an array return empty array []
  if(number < 0 || !Array.isArray(array)) {
      console.log(1);
      return [];
  }  
  // else if number parameter is not a number return last element of array
  else if (isNaN(number)) {
      console.log(2);
      return array[array.length - 1];
  }
  // else if number greater than the length return whole array.
  if (number > array.length){
      console.log(3);
      return array;
  }
  // else return as many element as the number
  // create a for loop, loop backwards through array <number> times
  // unshift each element into new array
  // declare counter variable
  else {
  for (var i = array.length - 1; i >= number - 1; i--) {
      console.log("yes");
      newArray.unshift(array[i]);
      // After each loop, add 1 to counter
      
  }
  } return newArray;
}

module.exports.last = last;

/**
 * indexOf : checks the index placement of an array
 * Returns the index of array that is in the first occurance of the value
 * will return -1 if the <value> is not in the <array>
 * 
 * @param {array} To loop through to determine the position of index
 * @param {value} index within the array
 * 
 * 
 * @return {value} the result is the position index within the array, if not return -1
 */
 

function indexOf(array, value) {
    // loop through array
    // create a variable to keep track of if the value was found
    let wasFound = 0;
    let result = 0;
    // if (!array.includes(value)){
    //     result = -1;
    // }
    for (var i = 0; i < array.length; i++){
        if(array[i] !== value){
            result = -1;
        }
    }
 
    for(var i = 0; i < array.length; i++) {
        if(array[i] === value){
            wasFound++;
            }
         
        if(array[i] === value && wasFound === 1) {
            // increment wasFound by 1
            // compare wasFound to 1
            result = i;
            
    }
            // return i
   // if value exist in array, at first occurence of value return i, 
    //outside the loop return negative 1
    
}
    return result;
}
module.exports.indexOf = indexOf;

/**
 * Contains: determinds wheither a certain value is found
 * 
 * @param {array} Array where the the function is searching within
 * @param {value} Value is what is being search within the array
 * 
 * @return {value} If the value was found within the array, returns true, if not then false
 * 
 *
 */

function contains(array, value){
    // declare a flag variable initialize false
    let result = false;
    // create an if statement and use the includes method to check if value is found
    if(array.includes(value)){
        // if so redeclare result to true
        result = true;
    }
    // return result
    return result;
}
module.exports.contains = contains;

/**
 * unique: Loops through the array and grab the unique value and remove the duplicates 
 * stores into a new array binding to be returned
 * 
 * @param {array} loops through the array to look for the first number to be and stores it into new array
 * 
 * @return {value} ([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6] all dupes are removed
 */
 
function unique(array){
    // create a new array variable []
    let newArray = [];
    // for loop through the array argument
    for (var i = 0; i < array.length; i++){
        var result = newArray.indexOf(array[i]);
        if(result === -1) {
            newArray.push(array[i]);
        }
    }return newArray;
    // indexOf function on each array element comparing it to the new array
    // if return value of indexOf is negative 1, then push that new element into the new array
 }
module.exports.unique = unique;

/**
 * filter: calls a function for each element in the array, passing an argument
 * if the function call returns true, will push onto a new array
 * 
 * @param {array} loops through the array to look through and find the element
 * @param {function} calling the each function to look through and test the array
 * 
 * @return returns the new array if the conditions is true
 * filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 */

function filter(array, test) {
    // declare empty array variable []
    var newArray = [];
    // call each on array and test
    each(array, function (element, index, collection) {
    // each is performing "function" on element, index, and collection of array
        if (test(element, index, collection)) {
            newArray.push(element);
        }
    });
    // if the function call on each element returns true, push said array element to new array
    // return newArray
    return newArray;
}
    // if test returns true, for an element, push element to a new array.
    // return the new array
    
module.exports.filter = filter;

/**
 * reject: call function for each element in the array passing an argument
 * inverse of filter
 * 
 * @param {array} loops through the array to look through and find the element
 * @param {function} calling the each function to look through and test the array
 * 
 * @return returns the new array if the conditions is false
 * reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

function reject(array, test) {
    return filter(array, function(element, index, array) {
        if(!test(element, index, array)) {
            return(element);
        }
    });
}
module.exports.reject = reject;

 /**
   * partition: takes an array and a function. uses filter() to create a new array of elements that pass the function, 
   * and uses reject() to create another array of elements that fail the function
   * returns those arrays as new elements in a third array that is returned from the partition function
   * 
   * @param {Array} Array: original array whose elements are tested with the function parameter
   * @param {Function} Func: a test function that is used on all array elements
   * 
   * @return {Array} Array: an array that contains two arrays: one that is returned from the filter() call,
   * and one that is returned from the reject() call
   */
   
function partition(array, func) {
    // use _.filter() and _.reject() to create two new arrays,
    // declare final array
    let partition = [];
    // declare filterArray
    let filterArray = [];
    // use filter() to push elements that pass the function param into filterArray
    filter(array, (element, index, collection) => {
        if (func(element, index, collection)) {
            filterArray.push(element);
        } 
    })
    // declare rejectArray;
    let rejectArray = [];
    // use reject() to push elements that fail the function param into rejectArray 
    reject(array, (element, index, collection) => {
        if (!func(element, index, collection)) {
            rejectArray.push(element);
            console.log("rejectArray: " + rejectArray);
        }
    })
    // add new arrays to partition array and return partition array     
    partition.push(filterArray, rejectArray);
    return partition;
}

module.exports.partition = partition;


/**
 * map: calls a <function> for each element in a <collection>, adds the return value of each function call
 * into a new array, returns that array.
 * 
 * @param {Array or Object} Collection: a collection of elements to be iterated over with a function
 * @param {Function} Function: a function to perform over the elements of a collection
 * 
 * @return {Array} Array: a new array with elements from input array modified by function
 */
 
 // takes a collection and a function
function map(collection, func) {
    // create empty array to store returned values
    let newArr = [];
    // use _.each to perform func on collections
    each(collection, function(element, index, collection) {
        // push result of function call into newArr
        newArr.push(func(element, index, collection));
    });
    // return new array
    return newArr;
}

module.exports.map = map;

/**
 * pluck: iterates through an <array> of objects, and for a given <property>, returns an array with the value of <property>
 * for each <array> object.
 * 
 * @param: {Array} Array: an array of objects to iterate through
 * @param: {String?} Property: a property to search for in each array object
 * 
 * @return: {Array} Array: an array containing the values of the given property in each object of the array
 */
 
 function pluck(array, property) {
    // return the call of _.map on the array arg and a callback(property)
   return  map(array, (element, index, collection) => {
        // map() returns an array
        // return the result of calling function on the property of each element in the collection
       return element[property];
    });
};

module.exports.pluck = pluck;


/**
 * every: takes a collection and function. 
 * if the function parameter is undefined, if any element of collecton is falsey, return false. otherwise,
 * if all collection elements are truthy, return true.
 * else, call the function on every element of the given collection. if any element passed through the function
 * returns false, return false. otherwise, if all elements return true, return true.
 * 
 * @param {Array or Object} Collection: a collection to iterate through with the given function
 * @param {Function} Function: a function/test to run on given collection elements
 * 
 * @return {Boolean} True if there are no falsey elements in collection or no false returns from function
 * if so False if there are any falsey elements in collection or false returns from function
 */
 
 function every(collection, funct) {
    // call function on every element of collection
    // if collection is array, use (element, index, collection) parameters
    // if collection is object, use (value, key, collection) parameters
    // use each to test if collection is array or object
    // create flag variable result, which will be returned
    let result = true;
    // if funct parameter is undefined
    if (funct === undefined) {
        // use each to loop through collections
        each(collection, function(element, index, collection) {
            // if any element, index, or collection are falsey, change result to false
            if (!element) {
                result = false;
            }
        });
    }
    // else use each to run test function on collection
       else {
        each(collection, function(element, index, collection) {
        // if return value of calling function on every element is true, return true
        // if return value of calling function on even one element is false, return false
            if (!funct(element, index, collection)) {
                result = false;
            }
        });
       }
    return result;
}

module.exports.every = every;


/**
 * some: takes a collection and function. 
 * if the function parameter is undefined, if any element of collecton is truthy, return true. otherwise,
 * if all collection elements are falsey, return false.
 * else, call the function on every element of the given collection. if any element passed through the function
 * returns true, return true. otherwise, if all elements return false, return false.
 * 
 * @param {Array or Object} Collection: a collection to iterate through with the given function
 * @param {Function} Function: a function/test to run on given collection elements
 * 
 * @return {Boolean} True returned if there are any truthy elements in collection or any true returns from function
 *  if not it will return False if there are no truthy elements in collection or no true returns from function
 */

function some(collection, funct) {
    // call function for every element of collection
    // if collection is array, use parameters (element, index, collection)
    // if collection is object use parameters (value, key, collection)
    // return value of calling function is true for at least one element, return true
    // if return value is false for all elements, return false
    // if function is not provided, return true if at least one element is truthy, otherwise return false
    let result = false;
    // if funct parameter is undefined
    if (funct === undefined) {
        // use each to loop through collections
        each(collection, function(element, index, collection) {
            // if any element, index, or collection are truthy, change result to true
            if (element) {
                result = true;
            }
        });
    }
    // else use each to run test function on collection
       else {
        each(collection, function(element, index, collection) {
        // if return value of calling function on every element is false, do nothing
        // if return value of calling function on even one element is true, change result to true
            if (funct(element, index, collection)) {
                result = true;
            }
        });
       }
    return result;
}

module.exports.some = some;



/**
 * reduce: iterates through an array with a function. if seed/previous value does not exist, use first index of array as seed 
 * and continue to next element, using function with seed/previous value and next array element. use return value of function
 * as next seed/previous value.
 * 
 * if seed is provided, use seed as previous value, run function through array as above.
 * 
 * return final value of function as return result.
 * 
 * @param {Array} Array: an array of elements to iterate through with function
 * @param {Function} Function: a function to perform on array elements (and seed)
 * @param {Any datatype} Seed: an optional starting value to use with first array element when function is first called
 * 
 * @return {Any datatype} Previous: The result of running a function on a starting parameter, the first array element, 
 * then the next array element with the return result, etc.
 * 
 */
 
 
 function reduce(array, funct, seed) {
    // call function for every element in collection with argument: (previous result, element, index)
    // loop through array, call funct on each element, previous result, and index
    var previous = array[0];
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            previous = funct(previous, array[i], i);
        } 
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
            previous = funct(seed, array[i], i);
            } else
            previous = funct(previous, array[i], i);
        } 
    }
    // use return value of funct = previous result
    // after last iteration, return the return value of final function call
    return previous;
}

module.exports.reduce = reduce;


/**
 * extend: takes an undefined number of objects and turns them into an array (rest parameter).
 * loop through array of objects and copy key-value pairs from following objects to first object.
 * return first object.
 * 
 * @param {Array} Array: array of objects formed from all objects put into parameters
 * 
 * @return {Object} Object: an object with copies of all key-value pairs from all objects put into parameters
 * 
 */

function extend(...objects) {
    // copy properties from object2 to object1. if there are more parameters, continue to pass those
    // into object1 in order
    // loop through array starting at index 1
    for (let i = 1; i < objects.length; i++) {
        // copy each object to objects[0] if properties do not exist in objects[0]
        var firstObj = objects[0];
        var currentObj = objects[i];
        // for each key in object, add key and value to firstObj
        for (var key in currentObj) {
            firstObj[key] = currentObj[key];
        }
    }
    
   return objects[0];
}

module.exports.extend = extend;