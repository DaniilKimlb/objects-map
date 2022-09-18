import React, { FC } from 'react'
import { Link, useMatch } from 'react-router-dom'

interface LinkObjectProps {
  to: string
  children: React.ReactNode
}
export const LinkObject: FC<LinkObjectProps> = ({ to, children }) => {
  const isMath = useMatch(to)
  return (
    <Link
      to={to}
      className={`px-4 w-full py-2 border-b border-gray-200 ${
        isMath ? 'bg-amber-200' : 'hover:bg-amber-100 duration-200'
      }`}
    >
      {children}
    </Link>
  )
}
