import { render, screen } from '@testing-library/react'

import DetailsComponent from '../src/components/DetailsComponent'

const characterDetails = {
  name: 'Luke Skywalker',
  birth_year: '19 BBY',
  eye_color: 'Blue',
  hair_color: 'Blond',
  height: '172',
  gender: 'Male',
  skin_color: 'Fair',
  mass: '77',
}

describe('DetailsComponent', () => {
  it('renders with correct character details', async () => {
    render(<DetailsComponent characterDetails={characterDetails} handleClick={() => {}} />)

    const nameElement = screen.getByText('Luke Skywalker')
    expect(nameElement).toBeInTheDocument()

    const birthYearElement = screen.getByText('Birth year: 19 BBY')
    expect(birthYearElement).toBeInTheDocument()
  })
})
