import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import Results from '../components/Results'
import Form from '../components/Form'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import { useGetAllCharactersQuery } from '../api/swapi'
import PopUp from '../components/PopUpComponent'
import themeContext from '../themeContext'

function MainPage() {
  const [value, setValue] = useState('')
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(
    Number(location.search.split('=')[1]) ? Number(location.search.split('=')[1]) : 1,
  )
  const [storageValue, setStorageValue] = useLocalStorage('CharacterName', '')

  const { data: charactersData, isFetching } = useGetAllCharactersQuery({
    pageNumber: currentPage,
    name: storageValue,
  })
  const { isDarkTheme, setIsDarkTheme } = useContext(themeContext)

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
    setStorageValue('')
  }
  const handleValueChange = (name: string): void => {
    setValue(name)
  }
  function toggleTheme() {
    setIsDarkTheme((prev) => !prev)
  }
  return (
    <div className={`container ${isDarkTheme ? 'dark' : ''}`}>
      <h1>Search Star Wars characters</h1>
      <Form value={value} setValue={setValue} isLoading={isFetching} handleValueChange={handleValueChange} />
      <button type="button" onClick={toggleTheme}>
        Theme
      </button>

      {isFetching ? (
        <div className="loading-wrapper">
          <Loading />
        </div>
      ) : (
        <Results charactersData={charactersData} location={location} />
      )}

      <Pagination charactersData={charactersData} onPageChange={handlePageChange} />
      <PopUp />
    </div>
  )
}

export default MainPage
