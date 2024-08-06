export function calculateNumberPagesPagination(totalCount: number, numberElementsOnPage: number): number[] {
  const pageNumbers: number[] = []
  if (totalCount) {
    const totalPages = Math.ceil(totalCount / numberElementsOnPage)
    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(i)
    }
  }
  return pageNumbers
}
