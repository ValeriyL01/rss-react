import { getAllCharacters } from '../src/api/api'

it('should get the first page data', async () => {
  const mockData = {
    count: 1,
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
      },
    ],
  }

  vi.spyOn(global, 'fetch').mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockData),
  } as unknown as Response)

  const response = await getAllCharacters(1)

  expect(response).toEqual(mockData)
})

it('should throw an error if data fetching fails', async () => {
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch data'))

  await expect(getAllCharacters(1)).rejects.toThrow('Failed to fetch data')
})
