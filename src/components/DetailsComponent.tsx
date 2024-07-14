import { Character } from '../types/types'

interface DetailsComponentProp {
  characterDetails: Character
  handleClick: () => void
}

function DetailsComponent({ characterDetails, handleClick }: DetailsComponentProp) {
  return (
    <aside className="aside">
      <div>
        <h1>Details</h1>
        <div className="item">
          <h3>{characterDetails.name}</h3>
          <ul>
            <li>Birth year: {characterDetails.birth_year}</li>
            <li>Eye color: {characterDetails.eye_color}</li>
            <li>Hair color: {characterDetails.hair_color}</li>
            <li>Height: {characterDetails.height}</li>
            <li>Gender: {characterDetails.gender}</li>
            <li>Skin color: {characterDetails.skin_color}</li>
            <li>Mass: {characterDetails.mass}</li>
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
