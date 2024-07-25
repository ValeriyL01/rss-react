import { describe, test, expect } from 'vitest'
import { calculateNumberPagesPagination } from '../src/utils/calculateNumberPagesPagination'
import { ResponseCharacter } from '../src/types/types'

describe('calculateNumberPagesPagination', () => {
  test('returns an array of page numbers if count contains a number', () => {
    const charactersData: ResponseCharacter = {
      count: 82,
      next: null,
      previos: null,
      results: [],
    }
    const numberElementsOnPage = 10
    const result = calculateNumberPagesPagination(charactersData, numberElementsOnPage)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('returns an empty array if the value of the variables charactersData.count = 0 is passed', () => {
    const charactersData: ResponseCharacter = {
      count: 0,
      next: null,
      previos: null,
      results: [],
    }

    const numberElementsOnPage = 5
    const result = calculateNumberPagesPagination(charactersData, numberElementsOnPage)
    expect(result).toEqual([])
  })
})
