'use strict'

// O(n)
const Horner = (arr, x) => {
  let p = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    p = arr[i] + x * p
  }
  return p
}
