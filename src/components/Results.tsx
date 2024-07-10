import { NavLink } from 'react-router-dom'
import { Character } from '../types/types'

interface LocationState {
  hash: string
  key: string
  pathname: string
  search: string
  state: null
}

interface ResultsProps {
  characters: Character[]
  location: LocationState
}

function Results({ characters, location }: ResultsProps) {
  return (
    <div>
      {characters.length ? (
        <div className="list-items">
          {characters.map((character) => (
            <div className="item" key={character.name}>
              <NavLink key={`${character.name}`} to={`/details/${character.name}${location.search}`}>
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
