import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseCharacter } from '../../types/types'
import { addSelectedCharacter, InitialState, removeSelectedCharacter } from '../../store/selectedCharacterSlice'
import styles from './results.module.css'

interface LocationState {
  hash: string
  key: string
  pathname: string
  search: string
  state: null
}

interface ResultsProps {
  charactersData: ResponseCharacter
  location: LocationState
}

export function Results({ charactersData, location }: ResultsProps) {
  const dispatch = useDispatch()
  const selectedCharacters = useSelector(
    (state: { selectedCharacter: InitialState }) => state.selectedCharacter.character,
  )
  return (
    <div>
      {charactersData.results.length ? (
        <div className={styles.listItems}>
          {charactersData.results.map((character) => (
            <div className={styles.item} key={character.name}>
              <NavLink data-testid="link" key={`${character.name}`} to={`/details/${character.name}${location.search}`}>
                <h3>{character.name}</h3>
                <ul>
                  <li>Birth year: {character.birth_year}</li>
                </ul>
              </NavLink>
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
