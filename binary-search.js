'use strict'

// O(log(n))
export const binarySearch = (arr, target) => {
  let l = 0
  let r = arr.length - 1
  let mid = Math.round((r + l) / 2)
  while (arr[mid] != target && l != r) {
    if (target > arr[mid]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
    mid = Math.round((r + l) / 2)
  }
  if (arr[mid] === target) return mid
  return null
}
