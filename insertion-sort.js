'use strict'

// O(n**2)
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
}

// O(n**2)
const insertionSortInverted = (arr) => {
  for (let i = arr.length - 2; i >= 0; i--) {
    const current = arr[i]
    let j = i + 1
    while (j < arr.length && arr[j] < current) {
      arr[j - 1] = arr[j]
      j++
    }
    arr[j - 1] = current
  }
}
