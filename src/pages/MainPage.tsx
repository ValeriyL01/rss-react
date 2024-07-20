import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import Results from '../components/Results'
import Form from '../components/Form'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import { useGetAllCharactersQuery } from '../api/swapi'
import PopUp from '../components/PopUpComponent'

function MainPage() {
  const [value, setValue] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(
    Number(location.search.split('=')[1]) ? Number(location.search.split('=')[1]) : 1,
  )
  const [storageValue, setStorageValue] = useLocalStorage('CharacterName', '')

  const { data: charactersData, isFetching } = useGetAllCharactersQuery({
    pageNumber: currentPage,
    name: storageValue,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (event.target === event.currentTarget) {
      if (location.pathname.split('/')[1] === 'details') {
        navigate(`/${location.search}`)
      }
    }
  }
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
    setStorageValue('')
  }
  const handleValueChange = (name: string): void => {
    setValue(name)
  }
  return (
    <div className="container" onClick={handleClick}>
      <h1>Search Star Wars characters</h1>
      <Form value={value} setValue={setValue} isLoading={isFetching} handleValueChange={handleValueChange} />
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
