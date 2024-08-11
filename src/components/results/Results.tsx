import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { ResponseCharacter } from '../../types/types'
import { addSelectedCharacter, InitialState, removeSelectedCharacter } from '../../store/selectedCharacterSlice'
import styles from './results.module.css'
import themeContext from '../../context/themeContext'

interface ResultsProps {
  charactersData: ResponseCharacter
  currentPath: string
}

export function Results({ charactersData, currentPath }: ResultsProps) {
  const dispatch = useDispatch()
  const selectedCharacters = useSelector(
    (state: { selectedCharacter: InitialState }) => state.selectedCharacter.character,
  )
  const { isDarkTheme } = useContext(themeContext)
  return (
    <div>
      {charactersData.results.length ? (
        <div className={styles.listItems}>
          {charactersData.results.map((character) => (
            <div className={`${styles.item} ${isDarkTheme ? styles.darkItem : ''}`} key={character.name}>
              <Link data-testid="link" key={`${character.name}`} href={`/details/${character.name}${currentPath}`}>
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
