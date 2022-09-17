import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div className="">Загрузка...</div>}>
      <Router>{children}</Router>
    </React.Suspense>
  )
}
