import { useEffect, useState } from 'react'
import { getCharacter } from '../api/api'
import { Character } from '../types/types'
import getKeyFromUrl from '../utils/getKeyFromUrl'

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

  const getResult = async (name: string) => {
    try {
      const data = await getCharacter(name)
      if (data) {
        setCharacterDetail(data.results[0])
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const characterName = getKeyFromUrl()
    getResult(characterName)
  }, [])

  return (
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
  )
}

export default Details
