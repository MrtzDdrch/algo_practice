// First attempt at Insetion Sort

let arr = [9,6,3,2,5,765,2,4,652,13,76,23,13,66,32,19,93];

function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var current = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > current; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}

console.log(insertionSort(arr));