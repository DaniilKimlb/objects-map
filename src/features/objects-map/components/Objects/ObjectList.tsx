import { Object } from '@/features/objects-map'
import React, { FC } from 'react'
import { ROUTES } from '@/routes'
import { LinkObject } from '@/features/objects-map/components/Objects/LinkObject'

interface ObjectListProps {
  objects: Object[]
}
export const ObjectList: FC<ObjectListProps> = ({ objects }) => {
  return (
    <ul className="flex flex-col w-full">
      {objects?.map((object) => (
        <li key={object.id} className="contents">
          <LinkObject to={`${ROUTES.OBJECTS_MAP}/${object.id}`}>
            🚙 {object.name}
          </LinkObject>
        </li>
      ))}
    </ul>
  )
}
