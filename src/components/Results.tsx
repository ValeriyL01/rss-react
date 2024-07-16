import { NavLink } from 'react-router-dom'
import { ResponseCharacter } from '../types/types'

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
