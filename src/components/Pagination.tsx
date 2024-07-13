import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface PaginationProps {
  totalPages: number
  onPageChange: (pageNumber: number) => void
}
function Pagination({ totalPages, onPageChange }: PaginationProps) {
  const [activePage, setActivePage] = useState(1)
  const pageNumbers: number[] = []

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i)
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <NavLink to={`/?page=${number}`}>
            <button
              className={`${number === activePage ? 'active-pagination-button' : ''}`}
              type="button"
              onClick={() => {
                onPageChange(number)
                setActivePage(number)
              }}
            >
              {number}
            </button>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
