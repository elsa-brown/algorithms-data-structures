function getShortestUniqueSubstring(arr, str) {

  let countHash = {}; // hash map for counting occurences of arr elems in str
  let uniqueCount = 0; // counter to track unique occurences and validate substrings
  let headIdx = 0; // will increment once valid substrings are found
  let tailIdx; // will increment in for-loop as we traverse str
  let result = ''; // result
  
  // inititialize hash map. Space complexity: O(a) a = size of array
  arr.forEach(elem => countHash[elem] = 0) // Time: O(n)
  
  // loop over string 
  for (tailIdx = 0; tailIdx < str.length; tailIdx++) { // Time: O(m)
    let tailChar = str[tailIdx]; 
    // check that tailChar is present in arr, and skip chars we are not checking for
    if (countHash[tailChar] !== undefined) { 
      // if tailChar exists in our map, increment its count value 
      countHash[tailChar]++
      // when the count value for a valid tailChar hits 1, increment the uniqueCount
      if (countHash[tailChar] === 1) {
        uniqueCount++
      }
    }
    
    // A substring is valid once, and as long as uniqueCount is equal to arr.length, so begin a while loop to stay within these bounds and check for the shortest possible substring
    while (uniqueCount === arr.length) {
      // store our most current valid substring in a temporary variable
      let tempStr = str.substring(headIdx, tailIdx + 1)
      // if tempStr is the same size as arr, return implicitly
      if (tempStr.length === arr.length) return tempStr;
      // otherwise, if we're on our first pass (result is empty), or if tempStr is smaller than the previously stored result, reassign result to our tempStr
      else if (!result || tempStr.length < result.length) {
        result = tempStr;
      }
      
      // Now we can increment headIdx as far as possible until we reach the bounds of our while loop (as long as uniqueCount remains equal to arr.length).
      
      // store the headChar
      let headChar = str[headIdx];
      // grab the current headCount from our countHash at the headChar key
      let headCount = countHash[headChar]
      // check that headChar is present as a key in countHash (this step is likely unnecessary, but I left it in) 
     if (countHash[headChar] !== undefined) {
      // decrement headCount from its current value
        headCount--
        // to block headCount from getting down to 0 (in which case our string would no longer be valid), set an if-statement to decrement uniqueCount and break the while loop in this case
        if (headCount === 0) {
          uniqueCount--
        }
      }
        // reassign the current count value for headChar in our countHash
        countHash[headChar] = headCount
     // }
      // Increment headIdx -- this is allowed as long as the above if-statement doesn't break our while loop. In other words, until headCount reaches 1.
      headIdx++
    }
  }
  
  return result;
}

// Time complexity = O(n + m) n = length of arr, m = length of str
// Space complexity = O(n)  