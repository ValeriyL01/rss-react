'use client'

import { useParams, useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

import { Character } from '../../../types/types'

import themeContext from '../../../context/themeContext'

import { DetailsComponent } from '../../../components/detailsComponent/DetailsComponent'
import { getCharacter } from '../../../api/api'

function Details() {
  const router = useRouter()
  const params = useParams()
  const [characterData, setCharacterData] = useState<Character>({
    name: '',
    birth_year: '',
    eye_color: '',
    hair_color: '',
    height: '',
    gender: '',
    skin_color: '',
    mass: '',
  })

  const { isDarkTheme } = useContext(themeContext)

  const handleCloseDetails = () => {
    router.push('/')
  }
  const getResult = async (name: string) => {
    try {
      const data = await getCharacter(name)
      if (data) {
        setCharacterData(data.results[0])
      }
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  useEffect(() => {
    const { name } = params
    if (typeof name === 'string') {
      getResult(name)
    }
  }, [router])

  return (
    <div className={`detailsWrapper ${isDarkTheme ? 'dark' : ''}`}>
      <DetailsComponent characterData={characterData} handleCloseDetails={handleCloseDetails} />
    </div>
  )
}
export default Details
