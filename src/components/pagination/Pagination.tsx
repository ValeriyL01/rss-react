import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ResponseCharacter } from '../../types/types'
import styles from './pagination.module.css'
import { calculateNumberPagesPagination } from '../../utils/calculateNumberPagesPagination'
import { Button } from '../button/Button'

interface PaginationProps {
  charactersData: ResponseCharacter
  onPageChange: (pageNumber: number) => void
}
export function Pagination({ charactersData, onPageChange }: PaginationProps) {
  const router = useRouter()
  const currentPath = router.asPath
  const pageNumberFromUrl = Number(currentPath.split('=')[1])
  const [activePage, setActivePage] = useState(pageNumberFromUrl ? Number(pageNumberFromUrl) : 1)
  const numberElementsOnPage = 10
  const pageNumbers = calculateNumberPagesPagination(charactersData, numberElementsOnPage)
  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <Link href={`/?page=${pageNumber}`}>
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
          </Link>
        </li>
      ))}
    </ul>
  )
}
