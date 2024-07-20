import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseCharacter } from '../types/types'
import { addSelectedCharacter, InitialState, removeSelectedCharacter } from '../store/selectedCharacterSlice'

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

function Results({ charactersData, location }: ResultsProps) {
  const dispatch = useDispatch()
  const selectedCharacters = useSelector(
    (state: { selectedCharacter: InitialState }) => state.selectedCharacter.character,
  )
  console.log(selectedCharacters)
  return (
    <div>
      {charactersData.results.length ? (
        <div className="list-items">
          {charactersData.results.map((character) => (
            <div className="item" key={character.name}>
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

export default Results
