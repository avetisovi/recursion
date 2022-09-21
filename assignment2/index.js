// mergin two sorted arrays into one sorted array
function mergeArrays(arr1, arr2) {
  const product = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (j === arr2.length || arr1[i] < arr2[j]) {
      product.push(arr1[i]);
      i++;
    } else {
      product.push(arr2[j]);
      j++;
    }
  }

  return product;
}

// array sorting algorithm
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const half = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  return mergeArrays(sortedFirstHalf, sortedSecondHalf);
}
