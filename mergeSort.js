// Preparing for Merge Sort by merging two sorted arrays

var arr1 = [1,3,5,8,40];
var arr2 = [2,4,7,9,11,12,45,67,89,90];

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

console.log(merge(arr1,arr2));