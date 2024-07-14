import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Pagination from '../src/components/Pagination'

test('Pagination component displays page numbers', async () => {
  const totalPages = 5
  const onPageChange = vi.fn()

  render(
    <MemoryRouter>
      <Pagination totalPages={totalPages} onPageChange={onPageChange} />
    </MemoryRouter>,
  )

  const pageButtons = screen.getAllByRole('button')
  expect(pageButtons).toHaveLength(totalPages)
  const user = userEvent.setup()
  await user.click(pageButtons[2])
  expect(onPageChange).toHaveBeenCalledWith(3)
})
