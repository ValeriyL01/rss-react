import { render, screen } from '@testing-library/react'

import { Pagination } from '../src/components/pagination/Pagination'
import { ResponseCharacter } from '../src/types/types'

const useRouter = vi.fn()
module.exports = { useRouter }
vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/?page=1',
  }),
}))
interface PaginationProps {
  charactersData: ResponseCharacter
}
test('Pagination component displays page numbers', async () => {
  const props: PaginationProps = {
    charactersData: {
      count: 82,
      next: null,
      previos: null,
      results: [
        {
          name: 'Luke Skywalker',
          birth_year: '19BBY',
          eye_color: 'blue',
          hair_color: 'blond',
          height: '172',
          skin_color: 'fair',
        },
        {
          name: 'Darth Vader',
          birth_year: '41.9BBY',
          eye_color: 'yellow',
          hair_color: 'none',
          height: '202',
          skin_color: 'white',
        },
      ],
    },
  }

  const totalPages = 9

  render(<Pagination charactersData={props.charactersData} />)

  const pageButtons = screen.getAllByRole('button')
  expect(pageButtons).toHaveLength(totalPages)
})
