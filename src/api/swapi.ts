import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const swapi = createApi({
  reducerPath: 'swapi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),

  endpoints: (build) => ({
    getAllCharacters: build.query({
      query: ({ pageNumber = 1, name }) => `?page=${pageNumber}&search=${name}`,
    }),
  }),
})

export const { useGetAllCharactersQuery } = swapi
