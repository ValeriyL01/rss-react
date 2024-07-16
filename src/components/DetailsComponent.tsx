import { ResponseCharacter } from '../types/types'

interface DetailsComponentProp {
  characterData: ResponseCharacter
  handleClick: () => void
}

function DetailsComponent({ characterData, handleClick }: DetailsComponentProp) {
  const character = characterData.results[0]
  return (
    <aside className="aside">
      <div>
        <h1>Details</h1>
        <div className="item">
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

      <button className="button-clouse" type="button" onClick={handleClick}>
        X
      </button>
    </aside>
  )
}

export default DetailsComponent
