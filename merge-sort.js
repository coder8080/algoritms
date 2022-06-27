'use strict'

// O(n)
export const merge = (left, right) => {
  const result = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  for (; i < left.length; i++) result.push(left[i])
  for (; j < right.length; j++) result.push(right[j])
  return result
}

// O(n * log(n))
export const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const middle_index = Math.round(arr.length / 2)
  const left = mergeSort(arr.slice(0, middle_index))
  const right = mergeSort(arr.slice(middle_index))
  return merge(left, right)
}
