
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
 * identity: Identity takes any value and returns that value unchanged
 *
 * @param {value} : Takes any value
 * @return{value} : The same value unchanged.
 */

let identity = (value) => value;

module.exports.identity = identity;

/**
 * typeof: will check the value and return the value's datatype.
 * 
 * @param {value} : The value of what datatype that will be determined
 * 
 * @return {string}: Datatype of the value as a "string"
 * 
 */
 
 let typeOf = (value) => {
     if(Array.isArray(value)){
         return "array";
     } else if (value === null) {
         return "null";
     } else {
         return typeof value;
     }
 };
 
 module.exports.typeOf = typeOf;
 
 /**
  * first: takes an array and a number,
  * if there is no array or number it will return an empty array instead
  * but if there is an array it will return the first value of the array
  * 
  * @param {array} : Array to be iterated
  * 
  * @param {number} : Number of elements
  * 
  * @return {Array or first element (of any datatype)} 
  * Will return a new array of the first value in the array
  * 
  */
 
 let first = (array, num) => {
     if(!Array.isArray(array) || num < 0){
         return [];
     } else if (typeof num !== "number") {
         return array[0];
     } else {
         return array.splice(0, num);
     }
 };
 
 module.exports.first = first;
 
 /**
  * last: returns the very last element of array.
  * if the number is negative, it will return an empty array.
  * will return the last index array if there is no number.
  * will return the whole array if the number is greater than the array
  * 
  * @param {array} : Array to be iterated
  * 
  * @param {number} : Number of array to return
  * 
  * @return {Array}
  * Will return a new array with the last element in the array
  * 
  */
  
  let last=(array,num) => {
   if(!Array.isArray(array) || num < 0) {
       return [];
   } else if ( typeof num !== "number"){
       return array[array.length - 1];
   } else if ( num > array.length){
       return array;
   } else {
       return array.slice(array.length - num);
   }
  };
  
  module.exports.last = last;
  
  /**
   * indexof: Will check the index placement of an array.
   * 
   * @param {array}: Loops through to check the position of array.
   * 
   * @param {value}: any given value
   * 
   * @return {i or -1}: will return the index of the element 
   * if not will return -1
   */
   
   let indexOf = (array, value) => {
       for(let i = 0; i < array.length; i++){
           if(array[i] === value){
               return i;
           }
       }
       return -1;
   };

module.exports.indexOf = indexOf;

/**
 * contains: Will check the if the value we're looking for is found and will return a boolean of its results.
 * 
 * @param {array}: Array where the value is being looked for.
 * 
 * @param {value}: Value is what is being searched for.
 * 
 * @return {boolean} : If the value was found within the array, returns true, 
 * if not then false
 */
 
 let contains = (array, value) => {
     if( array.includes(value)){
         return true;
     }
     return false;
 };
 
 module.exports.contains = contains;
 
 /**
  * unique: Loops through the array and grab the unique values in the array
  * and moves it into a new array to be returned.
  * 
  * @param {array}: loops through the array to look through finds the unique elements
  * 
  * @return {array}: Will create a new array with all of the duplicate values taken away
  */
  
  let unique = (array) => {
      let newArray = [];
      for(var i = 0 ; i <array.length; i++){
          let result = newArray.indexOf(array[i]);
          if(result === -1) {
              newArray.push(array[i]);
          }
      } return newArray;
  };
  
  module.exports.unique = unique;
  
  /**
   * filter: Filter will check the condition, if the condition passes
   * will make a new array with the truthy value
   * 
   * @param {array}: Array to be itereated to find the element
   * 
   * @param {function}: uses the each function to iterate
   * 
   * @return{array}: with the given conditions will return a new array
   *  with those conditions implemented.
   */
   
   let filter = (array, func) => {
       let newArray = [];
       each(array, (e, i, c) => {
           if(func(e, i, c,)){
               newArray.push(e);
           }
       });
       return newArray;
   };
   
   module.exports.filter = filter;

/**
 * Reject: is the inverse of filter, which will make a new array of falsey values
 * 
 * @param {array}: Array to be iterated
 * 
 * @param {function} uses the filter function
 * 
 * @return {array}: Return an array with falsey values that are filtered in the array. 
 * 
 * 
 */
 

 let reject = (array, funct) => {
   return filter(array, (e, i, c) => {
      return !funct(e, i, c,);
     });
  };

module.exports.reject = reject;
 
/**
 * Partition: This will return TWO arrays, one with truthy values and the other with falsey values 
 * 
 * @param {array}: Will use an array to be iterated
 * @param {function}: Will be calling the each funtion to iterate
 * 
 * @return {array}: Will return TWO whole new array! One with truthy values and the other one with falsey values
 */
 

let partition = (array, func) => {
 let result = [];
  let truth = [];
  let fals = [];
 for( let i = 0; i <array.length; i++){
  if(func(array[i], i, array)){
  truth.push_array[i];
 } else {
 fals.push(array[i]);
 }
 }return result.push(truth, fals);
};
 
module.exports.partition = partition;

/**
 * Map: Map will put the results of called function and put the element, index, and collection into a whole new rrray
 * 
 * @param{collection}: Which can be an object or an array
 * 
 * @param {function}: will call the each function to iterate
 * 
 * @return{array}: a whole new array with the results of the modified array
 */
 
 
 let map = (collection, func) => {
  let result = [];
   each(collection, (e, i, c) =>{
    result.push(func(e, i, c));
 });
  return result;
 };

 module.exports.map = map;

/**
 * Pluck: will return an array of the value properties
 * 
 * @param {collection}: can be an object or an array
 * 
 * @param {property}: property to return from collection
 * 
 * @return{array}: an array of values with the specified property
 */
 

let pluck = (array, property) => {
  return map(array, (e, i, c) => {
   return e[property];
 });
};
 
 module.exports.pluck = pluck;

/**
 * Every: Made to return true if ALL value being passed through the function is true
 * 
 * @param {collection}: which can be an array or an object to be iterated
 * 
 * @param {function}: will call the each function to iterate the collection
 * 
 * @return {booleaon}: will return true if all values pass, if not false
 */ 
 
 let every = (collection, func) => {
 let result = true;
  if (func === undefined){
  each(collection, (e, i, c) => {
   if(!e){
   result = false;
  }
 });
 } else {
 each(collection, (e, i, c) => {
 if(!func(e, i, c)){
 result = false;
 }
});
 }
 return result;
 };

module.exports.every = every;


/**
 * Some: Made to return true if atleast ONE value being passed through the function is true
 * 
 * @param {collection}: which can be an array or an object to be iterated
 * 
 * @param {function}: will call the each function to iterate the collection
 * 
 * @return {booleaon}: will return true if atleast ONE value is passed, if not false.
 */ 
 
 
 let some = (collection, func) => {
  let result = false;
  if(func === undefined){
   each(collection, (e, i, c) =>{
    if(e){
     result = true;
    }
   });
  } else {
   each(collection, (e, i, c) => {
    if(func(e, i, c)){
     result = true;
    }
   });
  }
  return result;
 };
 
 module.exports.some = some;
 
/**
 * Reduce: Takes an array and transform it into a single value
 * 
 * @param {array}: array to be iterated
 * 
 * @param {function} Will test each value in the collection
 * 
 * @param {seed}: will be used as the previous value can be any datatype
 * 
 * @returns{Value}: Can be any value depending on what datatype is the seed.
 * But will return the previous result value.
 * 
 */
 
  
 let reduce = (array, funct, seed) =>{ 
  let seedDefined = 0;
  if (seed === undefined){
      seed = array[0];
      seedDefined = 1;
  }
  for (let i = seedDefined; i < array.length; i++){
      seed = funct(seed, array[i], i);
  }   return seed;
};
  module.exports.reduce = reduce;

/**
 * Extend: is used to add other object properties into one object.
 * 
 * @param {object}: The initial object that will take the other object properties
 * @param {...object}: Can take as many Objects
 * 
 * @return {object}: will return a single object with added property of other objects
 */
 
 let extend = (object, ...objects) => {
  Object.assign(object, ...objects);
  return object;
};

module.exports.extend = extend;