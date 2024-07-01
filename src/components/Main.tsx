import { Character } from '../types/types'

type ResultsProps = {
  characters: Character[]
}

function Results({ characters }: ResultsProps) {
  return (
    <div>
      {characters.length ? (
        <ul>
          {characters.map((character) => (
            <li key={character.name}>
              <h3>{character.name}</h3>
              <ul>
                <li>Birth year: {character.birth_year}</li>
                <li>Eye color: {character.eye_color}</li>
                <li>Hair color: {character.hair_color}</li>
                <li>Height: {character.height}</li>
                <li>Gender: {character.gender}</li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Enter the correct character name</h2>
      )}
    </div>
  )
}

export default Results
