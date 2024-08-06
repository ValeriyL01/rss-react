import { useState } from 'react'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import styles from './pagination.module.css'
import { calculateNumberPagesPagination } from '../../utils/calculateNumberPagesPagination'
import { Button } from '../button/Button'

interface PaginationProps {
  totalCount: number
}
export function Pagination({ totalCount }: PaginationProps) {
  const searchParams = useSearchParams()

  const pageParam = searchParams.get('page') || '1'

  const [activePage, setActivePage] = useState(pageParam ? Number(pageParam) : 1)
  const numberElementsOnPage = 10
  const pageNumbers = calculateNumberPagesPagination(totalCount, numberElementsOnPage)
  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <Link href={`/?page=${pageNumber}`}>
            <Button
              className={`${pageNumber === activePage ? styles.activePaginationButton : ''}`}
              onClick={() => {
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
