'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { Results } from '../components/results/Results'
import { Form } from '../components/form/Form'
import { Pagination } from '../components/pagination/Pagination'

import PopUp from '../components/popUpComponent/PopUpComponent'
import themeContext from '../context/themeContext'

import { Button } from '../components/button/Button'

import { Character } from '../types/types'
import { getAllCharacters, getCharacter } from '../api/api'

function MainPage() {
  const [value, setValue] = useState('')
  const [characters, setCharacters] = useState<Character[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const searchParams = useSearchParams()
  const [page, setPage] = useState(searchParams.get('page') || '1')

  const { isDarkTheme, setIsDarkTheme } = useContext(themeContext)
  useEffect(() => {
    const pageParam = searchParams.get('page') || '1'

    setPage(pageParam)
  }, [searchParams])

  const getResults = async (inputValue: string) => {
    try {
      if (value) {
        const data = await getCharacter(inputValue)
        if (data) {
          setCharacters(data.results)
          setTotalCount(data.count)
        }
      } else {
        const data = await getAllCharacters(Number(page))
        if (data) {
          setCharacters(data.results)
          setTotalCount(data.count)
        }
      }
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  useEffect(() => {
    getResults(value)
  }, [page, value])
  const handleValueChange = async (name: string): Promise<void> => {
    setValue(name)
  }

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev)
  }, [setIsDarkTheme])

  return (
    <div className="container">
      <h1 className={`${isDarkTheme ? 'titleDark' : ''}`}>Search Star Wars characters</h1>
      <div className="formThemeButtonWrapper">
        <Form value={value} setValue={setValue} isLoading={false} handleValueChange={handleValueChange} />
        <Button className="themeButton" onClick={toggleTheme} type="button">
          Theme
        </Button>
      </div>

      <Results characters={characters} />

      <Pagination totalCount={totalCount} />
      <PopUp />
    </div>
  )
}

export default MainPage
