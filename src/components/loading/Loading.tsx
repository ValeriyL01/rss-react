import { useContext } from 'react'
import themeContext from '../../context/themeContext'
import styles from './loading.module.css'

export function Loading() {
  const { isDarkTheme } = useContext(themeContext)
  return (
    <div>
      <h1 className={isDarkTheme ? styles.loadingDark : ''}>Loading...</h1>
    </div>
  )
}
