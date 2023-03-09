// Bubble Sort
// First try, I am sure this can be done better/prettier
// lazily assuming that the array will only contain numbers
let arr = [1,3,6,8,15,24,34,35,47,59,5,3,6,8,12,13]
function bubbleSort(arr){
  for(let i = arr.length - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
