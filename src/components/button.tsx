import clsx from 'clsx'

type TextType = 'primary' | 'secondary'

interface ButtonProps {
  children: string
  className?: string
  type?: TextType
  onClick?: () => void
}

export function Button({
  children,
  className,
  onClick,
  type = 'primary',
}: ButtonProps) {
  const classNames = clsx(
    {
      ['bg-grape text-air hover:bg-violet active:bg-indigo']:
        type === 'primary',
      ['bg-steel text-midnight hover:bg-silver active:bg-cloud']:
        type === 'secondary',
    },
    'py-2 px-4 leading-3 font-bold rounded text-xl',
    className
  )

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  )
}
