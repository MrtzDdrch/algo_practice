// Merge Sort v1

function merge(arr1, arr2){
  var result = [];
  var i = 0;
  var j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      result.push(arr1[i]);
      i++;
    }else{
      result.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    result.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    result.push(arr2[j]);
    j++;
  }
  return result;
}

var arr = [909,34,6443,23,554,32,122,75,43,2,4,65,2,23332,1,22,344,54];

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);
}

console.log(mergeSort(arr));