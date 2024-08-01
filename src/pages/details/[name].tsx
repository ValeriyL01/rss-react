import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GetServerSideProps } from 'next'
import { Loading } from '../../components/loading/Loading'
import { DetailsComponent } from '../../components/detailsComponent/DetailsComponent'
import { swapi } from '../../api/swapi'

import themeContext from '../../context/themeContext'
import { store } from '../../store/store'
import { ResponseCharacter } from '../../types/types'

interface InitialCharacterData {
  initialCharacterData: ResponseCharacter
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query

  const { dispatch } = store

  const result = await dispatch(
    swapi.endpoints.getAllCharacters.initiate({
      pageNumber: '',
      name,
    }),
  )

  const characterData: ResponseCharacter = result.data || null
  return {
    props: {
      initialCharacterData: characterData,
    },
  }
}
function Details({ initialCharacterData }: InitialCharacterData) {
  const router = useRouter()
  const { isDarkTheme } = useContext(themeContext)

  const handleCloseDetails = () => {
    router.push('/')
  }

  return (
    <div className={`detailsWrapper ${isDarkTheme ? 'dark' : ''}`}>
      {!initialCharacterData ? (
        <Loading />
      ) : (
        <DetailsComponent characterData={initialCharacterData} handleCloseDetails={handleCloseDetails} />
      )}
    </div>
  )
}
export default Details
