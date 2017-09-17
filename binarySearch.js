// Recursive solution
	// Time: O(log n)
	// Space: O(log n) bc of recursion stack
function binarySearch(target, arr) {
    if (!arr.length) return false
    else {
      let p = Math.floor(arr.length / 2)
      let el = arr[p]
      if (target === el) return p;
      if (target < el) return binarySearch(target, arr.slice(0, p));
      else return binarySearch(target, arr.slice(p+1));
    }
}

// Iterative solution
	// two pointers and while loop (while min <= max)
	// Time: O(log n) bc the array to search is halved on each loop
	// Space: O(1) bc we do not store an extra array anywhere
function binarySearch(arr, num) {
  let minIdx = 0;
  let maxIdx = arr.length - 1; 
  let currIdx;
  let currElem;
  
  while (minIdx <= maxIdx) {
    currIdx = Math.floor((minIdx + maxIdx) / 2) || 0; 
    currElem = arr[currIdx]; 
    
    if (currElem < num) {
      minIdx = currIdx + 1;
    } else if (currElem > num) {
      maxIdx = currIdx - 1; 
    } else return currIdx;
  }
  
  return -1;
}