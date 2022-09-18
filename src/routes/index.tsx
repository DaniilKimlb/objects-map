import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { ObjectsMapRoutes } from '@/features/objects-map'

export enum ROUTES {
  OBJECTS_MAP = '/objects-map',
}

const routes = [
  { path: ROUTES.OBJECTS_MAP + '/*', element: <ObjectsMapRoutes /> },
  { path: '*', element: <Navigate to={ROUTES.OBJECTS_MAP} /> },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}
