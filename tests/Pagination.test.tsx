import { render, screen } from '@testing-library/react'
import { Pagination } from '../src/components/pagination/Pagination'

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (param: string) => {
      if (param === 'page') {
        return '1'
      }
      return null
    },
  }),
}))

test('Pagination component displays page numbers', async () => {
  const totalCount = 82
  const numberElementsOnPage = 10
  const totalPages = Math.ceil(totalCount / numberElementsOnPage)

  render(<Pagination totalCount={totalCount} />)

  const pageButtons = screen.getAllByRole('button')
  expect(pageButtons).toHaveLength(totalPages)
})
