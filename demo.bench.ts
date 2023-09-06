import { bench, describe } from 'vitest'

function fibonacci(n: number) {
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

describe('demo', () => {
  bench('fibonacci10', () => {
    fibonacci(10)
  })
  bench('fibonacci15', () => {
    fibonacci(15)
  })
})
