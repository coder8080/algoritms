'use strict'

// O(n**2)
export const countInversions = (arr) => {
  let result = 0
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    while (j >= 0 && arr[j] > arr[i]) {
      result += 1
      j--
    }
  }
  return result
}
