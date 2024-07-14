import getKeyFromUrl from '../src/utils/getKeyFromUrl'

test('checking that the function returns the required key from the url', () => {
  const mockPathname = '/example/path/3'
  Object.defineProperty(window, 'location', {
    value: { pathname: mockPathname },
  })

  const result = getKeyFromUrl()
  const expectedKey = '3'

  expect(result).toBe(expectedKey)
})
