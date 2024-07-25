import { useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import getKeyFromUrl from '../../utils/getKeyFromUrl'
import { Loading } from '../../components/loading/Loading'
import { DetailsComponent } from '../../components/detailsComponent/DetailsComponent'
import { useGetAllCharactersQuery } from '../../api/swapi'
import styles from './details.module.css'
import themeContext from '../../context/themeContext'

export function Details() {
  const navigate = useNavigate()
  const location = useLocation()
  const characterName = getKeyFromUrl()
  const { data: characterData, isFetching } = useGetAllCharactersQuery({
    pageNumber: '',
    name: characterName,
  })
  const { isDarkTheme } = useContext(themeContext)
  const handleCloseDetails = () => {
    navigate(`/${location.search}`)
  }

  return (
    <div className={`${styles.detailsWrapper} ${isDarkTheme ? 'dark' : ''} `}>
      {isFetching ? (
        <Loading />
      ) : (
        <DetailsComponent characterData={characterData} handleCloseDetails={handleCloseDetails} />
      )}
    </div>
  )
}
