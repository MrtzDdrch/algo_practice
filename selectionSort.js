// Selection Sort first attempt

let arr = [300,23,775,234,897,345,8,43,23,7,2,76,32,11];

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    var min = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(arr[min] < arr[i]){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr));