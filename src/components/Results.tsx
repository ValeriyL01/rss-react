import { NavLink } from 'react-router-dom'
import { Character } from '../types/types'

type ResultsProps = {
  characters: Character[]
}

function Results({ characters }: ResultsProps) {
  return (
    <div>
      {characters.length ? (
        <div className="list-items">
          {characters.map((character) => (
            <div className="item" key={character.name}>
              <NavLink key={`${character.name}`} to={`/details/${character.name}`}>
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
