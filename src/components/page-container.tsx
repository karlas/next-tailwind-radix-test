import type { ReactNode } from 'react'
import clsx from 'clsx'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={clsx('max-w-3xl mx-auto py-4', className)}>{children}</div>
  )
}
