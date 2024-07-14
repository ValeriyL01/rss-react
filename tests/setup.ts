import '@testing-library/jest-dom/vitest'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

if (matchers) {
  expect.extend(matchers)

  afterEach(() => {
    cleanup()
  })
}
