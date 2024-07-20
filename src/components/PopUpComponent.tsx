import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import { InitialState, removeAllCharacters } from '../store/selectedCharacterSlice'

function PopUp() {
  const dispatch = useDispatch()
  const selectedCharacters = useSelector(
    (state: { selectedCharacter: InitialState }) => state.selectedCharacter.character,
  )

  const handleUnselectAll = () => {
    dispatch(removeAllCharacters())
  }

  return (
    <div className={`popup ${selectedCharacters.length > 0 ? 'popup--active' : ''}`}>
      <h3 className="popup-title">{`${selectedCharacters.length} items are selected`}</h3>
      <div className="popup-button-wrapper">
        <button className="button" type="button" onClick={handleUnselectAll}>
          Unselect all
        </button>
        <button className="button" type="button">
          <CSVLink data={selectedCharacters} filename={`${selectedCharacters.length}_characters.csv`}>
            Download
          </CSVLink>
        </button>
      </div>
    </div>
  )
}

export default PopUp
