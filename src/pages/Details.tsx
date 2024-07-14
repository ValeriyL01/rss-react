import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCharacter } from '../api/api'
import { Character } from '../types/types'
import getKeyFromUrl from '../utils/getKeyFromUrl'
import Loading from '../components/Loading'
import DetailsComponent from '../components/DetailsComponent'

function Details() {
  const [characterDetails, setCharacterDetail] = useState<Character>({
    name: '',
    birth_year: '',
    eye_color: '',
    hair_color: '',
    height: '',
    gender: '',
    skin_color: '',
    mass: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const getResult = async (name: string) => {
    try {
      setIsLoading(true)
      const data = await getCharacter(name)
      if (data) {
        setCharacterDetail(data.results[0])
      }
      setIsLoading(false)
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  useEffect(() => {
    const characterName = getKeyFromUrl()
    getResult(characterName)
  }, [location])

  const handleClick = () => {
    navigate(`/${location.search}`)
  }

  return (
    <div className="aside-wrapper">
      {isLoading ? <Loading /> : <DetailsComponent characterDetails={characterDetails} handleClick={handleClick} />}
    </div>
  )
}

export default Details
