import { useLocation, useNavigate } from 'react-router-dom'
import getKeyFromUrl from '../utils/getKeyFromUrl'
import Loading from '../components/Loading'
import DetailsComponent from '../components/DetailsComponent'
import { useGetAllCharactersQuery } from '../api/swapi'

function Details() {
  const navigate = useNavigate()
  const location = useLocation()
  const characterName = getKeyFromUrl()
  const { data: characterData, isFetching } = useGetAllCharactersQuery({
    pageNumber: '',
    name: characterName,
  })

  const handleClick = () => {
    navigate(`/${location.search}`)
  }

  return (
    <div className="aside-wrapper">
      {isFetching ? <Loading /> : <DetailsComponent characterData={characterData} handleClick={handleClick} />}
    </div>
  )
}

export default Details
