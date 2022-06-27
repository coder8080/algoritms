'use strict'

// O(n**2)
export const bubbleSort = (arr) => {
  mainloop: for (let i = arr.length - 1; i > 0; i--) {
    let has_swapped = false
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1], has_swapped] = [arr[j + 1], arr[j], true]
    }
    if (!has_swapped) break mainloop
  }
  return arr
}
