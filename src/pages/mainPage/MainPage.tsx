import { useCallback, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import { Results } from '../../components/results/Results'
import { Form } from '../../components/form/Form'
import { Pagination } from '../../components/pagination/Pagination'
import { Loading } from '../../components/loading/Loading'
import { useGetAllCharactersQuery } from '../../api/swapi'
import PopUp from '../../components/popUpComponent/PopUpComponent'
import themeContext from '../../context/themeContext'
import styles from './mainPage.module.css'
import { Button } from '../../components/button/Button'

function MainPage() {
  const [value, setValue] = useState('')
  const location = useLocation()
  const pageNumberFromUrl = location.search.split('=')[1]
  const [currentPage, setCurrentPage] = useState(pageNumberFromUrl ? Number(pageNumberFromUrl) : 1)
  const [storageValue, setStorageValue] = useLocalStorage('CharacterName', '')
  const { data: charactersData, isFetching } = useGetAllCharactersQuery({
    pageNumber: currentPage,
    name: storageValue,
  })

  const { setIsDarkTheme } = useContext(themeContext)

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
    setStorageValue('')
  }
  const handleValueChange = (name: string): void => {
    setValue(name)
  }
  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev)
  }, [])
  return (
    <div className={styles.container}>
      <h1>Search Star Wars characters</h1>
      <Form value={value} setValue={setValue} isLoading={isFetching} handleValueChange={handleValueChange} />

      <Button className="" onClick={toggleTheme} type="button">
        Theme
      </Button>
      {isFetching ? (
        <div className={styles.loadingWrapper}>
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
