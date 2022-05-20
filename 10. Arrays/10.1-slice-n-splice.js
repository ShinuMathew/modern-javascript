var users = ["Ned", "Tim", "Rim", "Ram", "Nam", "Sod", "Pod"]

/**
 * slice(start, end) : The "start" is inclusive but the "end" is exclusive
 *  - It returns only the sliced part
 *  - When slice is passed on the start argument, 
 *      - It will act as sliced off and removes the particular element and return the rest
 *      - The argument passed here is not the index starting with 0. Its the position starting from 1
 */
console.log(users.slice(1, 3))  //  ["Tim", "Rim"]
console.log(users)
var name = "ShinuMathew"
console.log(name.slice(0, 5))   // Shinu
console.log(users.slice(2)) // [ 'Tim', 'Rim', 'Ram', 'Nam', 'Sod', 'Pod' ]. "Ned" is sliced off
console.log(name.slice(1))  // hinuMathew


/**
 * splice(start, count, ...values) : Splice removed the portion from start and counts till count values.
 *  - if third argument is provided, it will replace the spliced part with values
 *  - Splice returns the selected part and removes it from the actuall array
 */

console.log(users.splice(1, 3))  //  [ 'Tim', 'Rim', 'Ram' ]
console.log(users)  //  [ 'Ned', 'Nam', 'Sod', 'Pod' ]
console.log(users.splice(1))  //  [ 'Nam', 'Sod', 'Pod' ]

/**
 * SUMMARY :
 * slice(start, end) : Returns a new array after excluding elements from start to end-1. 
 *                      - Does not update the actual array
 * splice(start, count, ...values) : Returns a new array with the elements from start to (start + count). 
 *                                     - It also removes the values from the array
 *                                     - If values is provided, the removed values are replaced with the "values"
 */