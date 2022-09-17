import { Routes, useRoutes } from 'react-router-dom'

interface ROUTES {}

const routes = [
  {
    path: '/',
    element: <></>,
  },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}
