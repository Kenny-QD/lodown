
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
 * typeof: will determine the value and return the value's datatype.
 * 
 * @param {value} : The value of what datatype that will be determined
 * @return {string}: Datatype of the value
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
  * if it is not a number or an array, it will return an empty array
  * if the number is not given, it'll return the first element in the array
  * returns the first element of the array
  * 
  * @param {array} : The array to return the values from.
  * @param {number} : The number of array elements to return.
  * 
  * @return {Array or first element (of any datatype)} : 
  * Returns new array of elements containing the first <number> elements from <array>. 
  * Otherwise, returns empty array if <number> is negative or array argument input is not an array,
  * returns first element of array if <number> argument is not given or is NaN, 
  * or returns whole <array> if <number> is greater than or equal to the length of the arr
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
  * @param {array} : Array to pull elements from
  * @param {number} : Number of array to return
  * 
  * @return {Array or last element of array} Will return the last element of array
  * if there is no number provided then it will proceed to return the last index element of array
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
   * @param {array}: Loops through to determine the position of array.
   * @param {value}: index within the array
   * 
   * @return {value}: the result is the position index within the array, 
   * if not return -1
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
 * contains: Will determine the if the value we're looking for is found.
 * 
 * @param {array}: Array where the value is being searched within
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
  * @return {array}: [1,2,3,3,4,5,5,] => [1,2,3,4,5] removes the duplicates in array.
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
   * filter: calls a function for each element in the array, passing an argument
   * if the function call returns true, will push onto a new array.
   * 
   * @param {array}: loops through the array to find the element
   * @param {function}: calls each function to loop through array
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
    * reject: calls a function for each element in array passing an argument
    * is the inverse of filter
    * 
    * @param {array}: loops through the array to find the element
    * @param {function}: calls the filter function to loop and text the array
    * 
    * @return {array}: returns a new array if the given condtions are false
    */
    
    let reject = (array, funct) => {
        return filter(array, (e, i, c) => {
            return !funct(e, i, c,);
        });
    };
    
    module.exports.reject = reject;
    
    /**
     * partition creates a new array of values that are true and another array 
     * of false values, like having a filtered array and a reject array.
     * 
     * @param {array}: Array that the elements are being tested
     * @param {function} : testing function being used for all array elements;
     * 
     * @return {array}: Returns an array of TWO arrays
     * one array that has truthy values
     * other array with falsey values
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
      * map: Map calls a function for each element of the collection
      * returns value of each function call into a new array.
      * 
      * @param: {Array or Object}: collection of elements to be iterated
      * @param: {function}: function to perform over the elements within the collection
      * 
      * @return {Array}: New Array with elements modified by the function call
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
       * pluck: iterates through the array of objects
       * returns an array with the property of each array object
       * 
       * @param {array}: array of objects to be iterated
       * @param {property} : It searches for the property within each array object
       * 
       * @return {array}: Array with the values of its given property in each object of array.
       */
       
       let pluck = (array, property) => {
        return map(array, (e, i, c) => {
         return e[property];
        });
       };
       
       module.exports.pluck = pluck;
       
       /**
        * every: iterates through a collection to check the elements are found within a collection
        * will return a booleon wheither the collection elements are found or not
        * 
        * @param {Array or Object} : collection to iterate through with each function
        * @param {Function} : The function will test the collection element;
        * 
        * @return {booleon} : if there are any truthy elements are found, Will return true
        * if there are no truthy values then it will return false;
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
 * some:iterates through a collection to check the elements are found within a collection
 * will return a booleon wheither the collection elements are found or not
 * (inverse of every)
 * 
 * @param {Array or Object} : collection to iterate through with each function
 * @param {Function} : The function will test the collection element;
 * 
 * @return {booleon} : if there are any truthy elements are found, Will return false
 * if there are no truthy values then it will return true;
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
  * reduce: iterates through the array into a single value and is stored within the seed.
  * if there is no seed provided, the first index of array will be the seed
  * 
  * @param {array} : Array of elements to be iterated through with the function
  * @param {function} : Function to perform onto the array and seed
  * @param { Any Datatype} : The seed is an optional starting value to use with the first array element
  * 
  * @return { Any Datatype} : Depending on the seed, the result of running a function on the starting param,
  * and the first array element with the return result.
  * 
  */
  
  let reduce = (array, func, seed) => {
   let accumulator = seed === undefined ? 1: seed;
   for(let i = 0; i < array.length; i++){
    accumulator = func(accumulator, array[i], array);
    return accumulator;
   }
  };
  module.exports.reduce = reduce;
  
/**
 * extend: takes undefined amount of objects and turns them into an array,
 * will loop through the array of objects and copy key value pairs and will return the first object
 * 
 * @param {array} : array of objects to be converted by the objects that are in the parameter.
 * 
 * @return {Object} : an object of all key value pairs from all objects were inputted into the parameter.
 */
 
 let extend = (...objects) => {
for (let i = 0; i < objects.length; i++){
    let firstObj = objects[0];
    let currentObj = objects[i];
    for( let keys in currentObj){
        firstObj[keys] = currentObj[keys];
    }
}
return objects[0];
};

module.exports.extend = extend;