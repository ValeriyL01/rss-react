import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ResponseCharacter } from '../../types/types'
import styles from './pagination.module.css'
import { calculateNumberPagesPagination } from '../../utils/calculateNumberPagesPagination'
import { Button } from '../button/Button'

interface PaginationProps {
  charactersData: ResponseCharacter
  onPageChange: (pageNumber: number) => void
}
export function Pagination({ charactersData, onPageChange }: PaginationProps) {
  const location = useLocation()
  const pageNumberFromUrl = Number(location.search.split('=')[1])
  const [activePage, setActivePage] = useState(pageNumberFromUrl ? Number(pageNumberFromUrl) : 1)
  const numberElementsOnPage = 10
  const pageNumbers = calculateNumberPagesPagination(charactersData, numberElementsOnPage)
  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <NavLink to={`/?page=${pageNumber}`}>
            <Button
              className={`${pageNumber === activePage ? styles.activePaginationButton : ''}`}
              onClick={() => {
                onPageChange(pageNumber)
                setActivePage(pageNumber)
              }}
              type="button"
            >
              {pageNumber}
            </Button>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
