// let array = ['10', '-10', '-567'];

// Stringified the array  to be read as a string not a integer 
let secondlargest = Max(array, 2).toString();
let index = array.indexOf(secondlargest).toString();

function Max(arr, nth = 1, max = Infinity) {
  let large = -Infinity;

  // checking if the array is empty
  if (arr.length == 0) {
      return -1
  }
  for(e of arr) {
    if(e > large && e < max ) {
      large = e;
    } else if (max == large) {
        return -1; 
    }
  }
  if(nth==0) return max;
  return Max(arr, nth-1, large);
}
// prints the final output
console.log(secondlargest);