import { Character, ResponseCharacter } from '../types/types'

interface ResponseData {
  results: Character[]
  count: number
}

const getAllCharacters = async (pageNumber = 1): Promise<ResponseData | undefined> => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    const data: ResponseCharacter = await response.json()

    return { results: data.results, count: data.count }
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

const getCharacter = async (name: string): Promise<ResponseData | undefined> => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`)
    const data: ResponseCharacter = await response.json()

    return { results: data.results, count: data.count }
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

export { getAllCharacters, getCharacter }
