import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
}

export function Main({ children }: PageContainerProps) {
  return <div className="max-w-3xl mx-auto py-4">{children}</div>
}
