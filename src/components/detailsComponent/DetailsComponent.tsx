import { useContext } from 'react'
import themeContext from '../../context/themeContext'
import { ResponseCharacter } from '../../types/types'
import { Button } from '../button/Button'

import styles from './detailsComponent.module.css'

interface DetailsComponentProp {
  characterData: ResponseCharacter
  handleCloseDetails: () => void
}

export function DetailsComponent({ characterData, handleCloseDetails }: DetailsComponentProp) {
  const { isDarkTheme } = useContext(themeContext)
  const character = characterData.results[0]
  return (
    <aside className={`${styles.details} ${isDarkTheme ? styles.detailsDark : ''}`}>
      <div>
        <h1>Details</h1>
        <div className={`${styles.detailsItem} ${isDarkTheme ? styles.detailsItemDark : ''}`}>
          <h3>{character.name}</h3>
          <ul>
            <li>Birth year: {character.birth_year}</li>
            <li>Eye color: {character.eye_color}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Height: {character.height}</li>
            <li>Gender: {character.gender}</li>
            <li>Skin color: {character.skin_color}</li>
            <li>Mass: {character.mass}</li>
          </ul>
        </div>
      </div>
      <Button className={styles.clouseButton} type="button" onClick={handleCloseDetails}>
        X
      </Button>
    </aside>
  )
}
