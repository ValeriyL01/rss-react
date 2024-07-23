import { ResponseCharacter } from '../types/types'

export function calculateNumberPagesPagination(
  charactersData: ResponseCharacter,
  numberElementsOnPage: number,
): number[] {
  const pageNumbers: number[] = []
  if (charactersData) {
    const totalPages = Math.ceil(charactersData.count / numberElementsOnPage)
    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(i)
    }
  }
  return pageNumbers
}
