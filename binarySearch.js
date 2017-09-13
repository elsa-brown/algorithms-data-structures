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