import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import { useContext } from 'react'
import { InitialState, removeAllCharacters } from '../../store/selectedCharacterSlice'
import styles from './popUpComponent.module.css'
import { Button } from '../button/Button'
import themeContext from '../../context/themeContext'

function PopUp() {
  const dispatch = useDispatch()
  const selectedCharacters = useSelector(
    (state: { selectedCharacter: InitialState }) => state.selectedCharacter.character,
  )
  const { isDarkTheme } = useContext(themeContext)
  const handleUnselectAll = () => {
    dispatch(removeAllCharacters())
  }

  return (
    <div
      className={`${styles.popup} ${selectedCharacters.length > 0 ? styles.popupActive : ''} ${isDarkTheme ? styles.popupDark : ''}`}
    >
      <h3 className={styles.popupTitle}>{`${selectedCharacters.length} items are selected`}</h3>
      <div className={styles.popupButtonsWrapper}>
        <Button className={styles.popupButton} onClick={handleUnselectAll} type="button">
          Unselect all
        </Button>
        <Button className={styles.popupButton} type="button">
          <CSVLink data={selectedCharacters} filename={`${selectedCharacters.length}_characters.csv`}>
            Download
          </CSVLink>
        </Button>
      </div>
    </div>
  )
}

export default PopUp
