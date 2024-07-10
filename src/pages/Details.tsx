import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCharacter } from '../api/api'
import { Character } from '../types/types'
import getKeyFromUrl from '../utils/getKeyFromUrl'
import Loading from '../components/Loading'

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
      {isLoading ? (
        <Loading />
      ) : (
        <aside className="aside">
          <div>
            <h1>Details</h1>
            <div className="item">
              <h3>{characterDetails.name}</h3>
              <ul>
                <li>Birth year: {characterDetails.birth_year}</li>
                <li>Eye color: {characterDetails.eye_color}</li>
                <li>Hair color: {characterDetails.hair_color}</li>
                <li>Height: {characterDetails.height}</li>
                <li>Gender: {characterDetails.gender}</li>
                <li>Skin color: {characterDetails.skin_color}</li>
                <li>Mass: {characterDetails.mass}</li>
              </ul>
            </div>
          </div>

          <button className="button-clouse" type="button" onClick={handleClick}>
            X
          </button>
        </aside>
      )}
    </div>
  )
}

export default Details
