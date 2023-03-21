// Helper functions rearranged in the order they are called
// I combined and simplified two of the functions from Stack Overflow as it seemed unnecessarily complex to me otherwise
// I have to admit that I am not a fan of this one
// v2: Seeing as how it was only one line, I integrated one more of the helper functions into radixSort()

function maxDigits(arr){
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0) continue;
    let temp = Math.floor(Math.log10(Math.abs(arr[i]))) + 1;
    if(temp > maxDigits) maxDigits = temp;
  }
  return maxDigits;
}

function radixSort(arr){
  var maxDigitCount = maxDigits(arr);
  for(var k = 0; k <= maxDigitCount; k++){
    var digitBuckets = Array.from({length: 10}, () => []);
    for(var i = 0; i < arr.length; i++){
      let digit = Math.floor(Math.abs(arr[i]) / Math.pow(10, k)) % 10;
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

var numbers = [12,53,765,2345,86,35,98,46,98576,295,84];

console.log(radixSort(numbers));