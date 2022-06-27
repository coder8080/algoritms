'use strict'

// O(n**2)
export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let current_min = Infinity
    let current_min_index = null
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < current_min) {
        current_min = arr[j]
        current_min_index = j
      }
    }
    ;[arr[i], arr[current_min_index]] = [arr[current_min_index], arr[i]]
  }
}
