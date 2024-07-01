import { Character, ResponseCharacter } from '../types/types'

const getCharacter = async (value: string): Promise<Character[] | undefined> => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?search=${value}&page=1
    `)
    const data: ResponseCharacter = await response.json()
    return data.results
  } catch (err) {
    console.error(err)
  }
}

export default getCharacter
