import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { Character } from '../../types/types'
import { addSelectedCharacter, InitialState, removeSelectedCharacter } from '../../store/selectedCharacterSlice'
import styles from './results.module.css'
import themeContext from '../../context/themeContext'

interface ResultsProps {
  characters: Character[]
}

export function Results({ characters }: ResultsProps) {
  const dispatch = useDispatch()

  const selectedCharacters = useSelector(
    (state: { selectedCharacter: InitialState }) => state.selectedCharacter.character,
  )
  const { isDarkTheme } = useContext(themeContext)
  return (
    <div>
      {characters.length ? (
        <div className={styles.listItems}>
          {characters.map((character) => (
            <div className={`${styles.item} ${isDarkTheme ? styles.darkItem : ''}`} key={character.name}>
              <Link data-testid="link" key={`${character.name}`} href={`/details/${character.name}`}>
                <h3 className={`${isDarkTheme ? styles.itemTitle : ''}`}>{character.name}</h3>
                <ul>
                  <li className={`${isDarkTheme ? styles.itemText : ''}`}>Birth year: {character.birth_year}</li>
                </ul>
              </Link>
              <input
                type="checkbox"
                checked={selectedCharacters.some((item) => item.name === character.name)}
                onChange={(e) => {
                  if (e.target.checked) {
                    dispatch(addSelectedCharacter(character))
                  } else {
                    dispatch(removeSelectedCharacter(character))
                  }
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2>Enter the correct character name</h2>
      )}
    </div>
  )
}
