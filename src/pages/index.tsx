import { useCallback, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import useLocalStorage from '../hooks/useLocalStorage'
import { Results } from '../components/results/Results'
import { Form } from '../components/form/Form'
import { Pagination } from '../components/pagination/Pagination'
import { Loading } from '../components/loading/Loading'
import { swapi } from '../api/swapi'
import PopUp from '../components/popUpComponent/PopUpComponent'
import themeContext from '../context/themeContext'

import { Button } from '../components/button/Button'
import { store } from '../store/store'
import { ResponseCharacter } from '../types/types'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageNumber = (context.query.page as string) || '1'
  const name = (context.query.name as string) || ''
  const { dispatch } = store
  const result = await dispatch(
    swapi.endpoints.getAllCharacters.initiate({
      pageNumber,
      name,
    }),
  )
  const characterData = result.data || null
  return {
    props: {
      initialCharacterData: characterData,
      initialPageNumber: Number(pageNumber),
      initialName: name,
    },
  }
}
interface MainPageProps {
  initialCharacterData: ResponseCharacter
  initialPageNumber: number
  initialName: string
}

function MainPage({ initialCharacterData, initialPageNumber, initialName }: MainPageProps) {
  const [value, setValue] = useState(initialName)
  const [, setCurrentPage] = useState(initialPageNumber)
  const [, setStorageValue] = useLocalStorage('CharacterName', initialName)
  const router = useRouter()
  const currentPath = router.asPath

  const { isDarkTheme, setIsDarkTheme } = useContext(themeContext)

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
    setStorageValue('')
  }

  const handleValueChange = (name: string): void => {
    setValue(name)
    setStorageValue(name)
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
      {initialCharacterData === null ? (
        <div className="loadingWrapper">
          <Loading />
        </div>
      ) : (
        <Results charactersData={initialCharacterData} currentPath={currentPath} />
      )}
      <Pagination charactersData={initialCharacterData} onPageChange={handlePageChange} />
      <PopUp />
    </div>
  )
}

export default MainPage
