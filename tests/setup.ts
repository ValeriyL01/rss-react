import '@testing-library/jest-dom/vitest'

// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, afterEach } from 'vitest'
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@testing-library/react'

// eslint-disable-next-line import/no-extraneous-dependencies
import matchers from '@testing-library/jest-dom/matchers'

if (matchers) {
  expect.extend(matchers)

  afterEach(() => {
    cleanup()
  })
}
