type ButtonType = 'button' | 'submit'

interface ButtonProps {
  className: string
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void
  children: React.ReactNode
  type: ButtonType
}

export function Button({ className, onClick, type = 'button', children }: ButtonProps) {
  const defaultClass = 'button'
  const combinedClass = `${defaultClass} ${className}`

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={combinedClass} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
