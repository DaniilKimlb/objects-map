import { Route, Routes } from 'react-router-dom'
import { ObjectsMap } from './ObjectsMap'

export const ObjectsMapRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ObjectsMap />}></Route>
      <Route path=":objectId" element={<ObjectsMap />}></Route>
    </Routes>
  )
}
