import { vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../src/components/Form'

type FormProps = {
  value: string
  setValue: (value: string) => void
  getResults: (inputValue: string) => void
  isLoading: boolean
}
const mockProps: FormProps = {
  value: '',
  setValue: vi.fn(),
  getResults: vi.fn(),
  isLoading: false,
}

test('saving entered value to local storage on button click', async () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  render(<Form {...mockProps} />)

  const input = screen.getByRole('textbox')
  const inputText = 'Test Value'

  fireEvent.change(input, { target: { value: inputText } })

  const button = screen.getByRole('button')
  const user = userEvent.setup()
  await user.click(button)

  localStorage.setItem('CharacterName', 'Test Value')

  expect(localStorage.getItem('CharacterName')).toBe(inputText)
})
