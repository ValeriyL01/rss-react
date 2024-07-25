type ButtonType = 'button' | 'submit'

interface ButtonProps {
  className: string
  onClick?: () => void
  children: React.ReactNode
  type: ButtonType
}

export function Button({ className, onClick, type = 'button', children }: ButtonProps) {
  const defaultClass = 'button'
  const combinedClass = `${defaultClass} ${className}`

  return (
    <button className={combinedClass} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
