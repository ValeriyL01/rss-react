import { useCallback, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import useLocalStorage from '../hooks/useLocalStorage'
import { Results } from '../components/results/Results'
import { Form } from '../components/form/Form'
import { Pagination } from '../components/pagination/Pagination'
import { Loading } from '../components/loading/Loading'
import { useGetAllCharactersQuery } from '../api/swapi'
import PopUp from '../components/popUpComponent/PopUpComponent'
import themeContext from '../context/themeContext'

import { Button } from '../components/button/Button'

function MainPage() {
  const [value, setValue] = useState('')
  const router = useRouter()
  const currentPath = router.asPath
  const pageNumberFromUrl = currentPath.split('=')[1]
  const [currentPage, setCurrentPage] = useState(pageNumberFromUrl ? Number(pageNumberFromUrl) : 1)
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
  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev)
  }, [])
  return (
    <div className="container">
      <h1 className={`${isDarkTheme ? 'titleDark' : ''}`}>Search Star Wars characters</h1>
      <div className="formThemeButtonWrapper">
        <Form value={value} setValue={setValue} isLoading={isFetching} handleValueChange={handleValueChange} />
        <Button className="themeButton" onClick={toggleTheme} type="button">
          Theme
        </Button>
      </div>
      {isFetching ? (
        <div className="loadingWrapper">
          <Loading />
        </div>
      ) : (
        <Results charactersData={charactersData} currentPath={currentPath} />
      )}
      <Pagination charactersData={charactersData} onPageChange={handlePageChange} />
      <PopUp />
    </div>
  )
}

export default MainPage
