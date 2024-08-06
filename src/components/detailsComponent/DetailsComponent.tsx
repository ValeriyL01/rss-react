import { useContext } from 'react'
import themeContext from '../../context/themeContext'
import { Character } from '../../types/types'
import { Button } from '../button/Button'

import styles from './detailsComponent.module.css'

interface DetailsComponentProp {
  characterData: Character
  handleCloseDetails: () => void
}

export function DetailsComponent({ characterData, handleCloseDetails }: DetailsComponentProp) {
  const { isDarkTheme } = useContext(themeContext)

  return (
    <aside className={`${styles.details} ${isDarkTheme ? styles.detailsDark : ''}`}>
      <div>
        <h1>Details</h1>
        <div className={`${styles.detailsItem} ${isDarkTheme ? styles.detailsItemDark : ''}`}>
          <h3>{characterData.name}</h3>
          <ul>
            <li>Birth year: {characterData.birth_year}</li>
            <li>Eye color: {characterData.eye_color}</li>
            <li>Hair color: {characterData.hair_color}</li>
            <li>Height: {characterData.height}</li>
            <li>Gender: {characterData.gender}</li>
            <li>Skin color: {characterData.skin_color}</li>
            <li>Mass: {characterData.mass}</li>
          </ul>
        </div>
      </div>
      <Button className={styles.clouseButton} type="button" onClick={handleCloseDetails}>
        X
      </Button>
    </aside>
  )
}
