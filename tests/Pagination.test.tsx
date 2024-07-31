import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Pagination } from '../src/components/pagination/Pagination'
import { ResponseCharacter } from '../src/types/types'

test('Pagination component displays page numbers', async () => {
  interface PaginationProps {
    charactersData: ResponseCharacter
    onPageChange: (pageNumber: number) => void
  }
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
    onPageChange: vi.fn(),
  }
  const totalPages = 9
  const onPageChange = vi.fn()

  render(<Pagination charactersData={props.charactersData} onPageChange={onPageChange} />)

  const pageButtons = screen.getAllByRole('button')
  expect(pageButtons).toHaveLength(totalPages)
  const user = userEvent.setup()
  await user.click(pageButtons[2])
  expect(onPageChange).toHaveBeenCalledWith(3)
})
