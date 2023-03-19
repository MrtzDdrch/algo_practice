// Quick Sort v1

var arr = [10,39,763,1,86,28,65,7,8,9,434,675,3,5];

function pivot(arr, start=0, end=arr.length-1){
  function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  }
  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    // Left side
    quickSort(arr, left, pivotIndex - 1);
    // Right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(arr);
console.log(quickSort(arr));