import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { DetailsComponent } from '../src/components/detailsComponent/DetailsComponent'

import { ResponseCharacter } from '../src/types/types'
import { store } from '../src/store/store'
import themeContext from '../src/context/themeContext'

describe('DetailsComponent', () => {
  const characterData: ResponseCharacter = {
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
    count: 0,
    next: null,
    previos: null,
  }

  const handleCloseDetails = vi.fn()

  it('renders the character details correctly', () => {
    render(
      <Provider store={store}>
        <DetailsComponent characterData={characterData} handleCloseDetails={handleCloseDetails} />
      </Provider>,
    )

    const nameElement = screen.getByText('Luke Skywalker')
    expect(nameElement).toBeInTheDocument()

    const birthYearElement = screen.getByText('Birth year: 19 BBY')
    expect(birthYearElement).toBeInTheDocument()

    const eyeColorElement = screen.getByText('Eye color: Blue')
    expect(eyeColorElement).toBeInTheDocument()

    const hairColorElement = screen.getByText('Hair color: Blond')
    expect(hairColorElement).toBeInTheDocument()

    const heightElement = screen.getByText('Height: 172')
    expect(heightElement).toBeInTheDocument()

    const genderElement = screen.getByText('Gender: Male')
    expect(genderElement).toBeInTheDocument()

    const skinColorElement = screen.getByText('Skin color: Fair')
    expect(skinColorElement).toBeInTheDocument()

    const massElement = screen.getByText('Mass: 77')
    expect(massElement).toBeInTheDocument()
  })

  it('calls handleCloseDetails when the close button is clicked', () => {
    render(
      <Provider store={store}>
        <DetailsComponent characterData={characterData} handleCloseDetails={handleCloseDetails} />
      </Provider>,
    )

    const closeButton = screen.getByRole('button', { name: 'X' })
    closeButton.click()

    expect(handleCloseDetails).toHaveBeenCalled()
  })
  it('renders the character details correctly', () => {
    const { getByRole } = render(
      <themeContext.Provider value={{ isDarkTheme: true, setIsDarkTheme: () => {} }}>
        <DetailsComponent characterData={characterData} handleCloseDetails={handleCloseDetails} />
      </themeContext.Provider>,
    )
    const loadingText = getByRole('complementary')
    expect(loadingText).toHaveClass(/detailsDark/i)
  })
})
