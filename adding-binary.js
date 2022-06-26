'use strict'

// O(n)
const addBinaryNumbers = (number1, number2) => {
  const result = []
  const [maxNumber, minNumber] =
    number1.length > number2.length ? [number1, number2] : [number2, number1]
  maxNumber.reverse()
  minNumber.reverse()
  let carried = 0
  for (let i = 0; i < maxNumber.length; i++) {
    let sum = number1[i] + number2[i] + carried
    carried = sum > 1 ? 1 : 0
    sum = sum < 2 ? sum : sum === 2 ? 0 : 1
    result.push(sum)
  }
  for (let j = minNumber.length; j < maxNumber.length; j++) {
    let sum = carried + maxNumber[j]
    carried = 0
    result.push(sum)
  }
  if (carried != 0) result.push(carried)
  result.reverse()
  return result
}
