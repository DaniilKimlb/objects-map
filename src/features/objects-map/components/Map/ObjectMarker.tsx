import React, { FC, useEffect, useRef } from 'react'
import { LatLngExpression, Marker as LeafletMarker } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'

interface ObjectMarkerProps {
  isActive?: boolean
  position: LatLngExpression
  name: string
  onClick(): void
}

export const ObjectMarker: FC<ObjectMarkerProps> = ({
  isActive,
  position,
  name,
  onClick,
}) => {
  const marker = useRef<LeafletMarker>()

  useEffect(() => {
    if (isActive) {
      marker.current.openPopup()
    }
  }, [marker, isActive])

  return (
    <Marker ref={marker} position={position} eventHandlers={{ click: onClick }}>
      <Popup closeButton={false} closeOnClick={false}>
        {name}
      </Popup>
    </Marker>
  )
}
