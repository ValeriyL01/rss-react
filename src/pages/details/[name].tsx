import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Loading } from '../../components/loading/Loading'
import { DetailsComponent } from '../../components/detailsComponent/DetailsComponent'
import { useGetAllCharactersQuery } from '../../api/swapi'

import themeContext from '../../context/themeContext'

function Details() {
  const router = useRouter()
  const { name } = router.query

  const characterName = name

  const { data: characterData, isFetching } = useGetAllCharactersQuery({
    pageNumber: '',
    name: characterName,
  })
  const { isDarkTheme } = useContext(themeContext)

  const handleCloseDetails = () => {
    router.push('/')
  }

  return (
    <div className={`detailsWrapper ${isDarkTheme ? 'dark' : ''} `}>
      {isFetching ? (
        <Loading />
      ) : (
        <DetailsComponent characterData={characterData} handleCloseDetails={handleCloseDetails} />
      )}
    </div>
  )
}
export default Details
