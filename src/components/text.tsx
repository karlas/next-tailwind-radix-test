import clsx from 'clsx'

type TextType = 'caption' | 'bodyS'

interface TextProps {
  children: string
  className?: string
  type?: TextType
}

export function Text({ children, className, type = 'bodyS' }: TextProps) {
  const classNames = clsx(
    {
      ['leading-2 font-normal text-xs']: type === 'bodyS',
      ['leading-4 font-bold text-md']: type === 'caption',
    },
    className
  )

  return <div className={classNames}>{children}</div>
}
