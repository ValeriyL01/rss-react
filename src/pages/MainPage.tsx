import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import { Character } from '../types/types'
import useLocalStorage from '../hooks/useLocalStorage'
import Results from '../components/Results'
import Form from '../components/Form'
import { getAllCharacters, getCharacter } from '../api/api'
import Pagination from '../components/Pagination'

function MainPage() {
  const [value, setValue] = useState('')
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(
    Number(location.search.split('=')[1]) ? Number(location.search.split('=')[1]) : 1,
  )
  const [storageValue, setStorageValue] = useLocalStorage('CharacterName', '')

  const getResults = async (inputValue: string) => {
    try {
      setIsLoading(true)

      if (value || storageValue) {
        const data = await getCharacter(inputValue)
        if (data) {
          setCharacters(data.results)
          setTotalPages(Math.ceil(data.count / 10))
        }
      } else {
        const data = await getAllCharacters(currentPage)
        if (data) {
          setCharacters(data.results)
          setTotalPages(Math.ceil(data.count / 10))
        }
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    setStorageValue('')
  }
  useEffect(() => {
    getResults(storageValue)
  }, [currentPage, storageValue])

  return (
    <div className="container">
      <Form value={value} setValue={setValue} getResults={getResults} isLoading={isLoading} />
      {isLoading ? <h1>Loading...</h1> : <Results characters={characters} />}

      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default MainPage
