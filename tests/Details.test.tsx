import { render, screen } from '@testing-library/react'

import { Details } from '../src/pages/details/Details'

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(() => ({ search: 'name=Luke Skywalker' })),
  useNavigate: vi.fn(),
}))

vi.mock('../api/api', () => ({
  getCharacter: vi.fn(() =>
    Promise.resolve({
      results: [
        {
          name: 'Luke Skywalker',
          birth_year: '19 BBY',
          eye_color: 'Blue',
          hair_color: 'Blond',
          height: '172',
          gender: 'Male',
          skin_color: 'Fair',
          mass: '77',
        },
      ],
    }),
  ),
}))

describe('Details', () => {
  it('displays the Loading component', async () => {
    render(<Details />)

    const loadingElement = screen.queryByText('Loading...')
    expect(loadingElement).toBeInTheDocument()
  })
})
