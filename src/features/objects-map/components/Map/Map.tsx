import { MapContainer, TileLayer } from 'react-leaflet'
import leaflet from 'leaflet'
import { useObjects } from '@/features/objects-map/api/getObjects'
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '@/routes'
import React, { useEffect, useRef, useState } from 'react'
import { Object } from '@/features/objects-map'
import { Spinner } from '@/components/Elements/Spinner'
import { ObjectMarker } from '@/features/objects-map/components/Map/ObjectMarker'
import { TITLE_URL_MAP } from '@/config'

const centerCoordinates = { lat: 32, lng: 44 }

export const Map = () => {
  const objects = useObjects({})

  const navigate = useNavigate()
  const { objectId } = useParams<{ objectId: string }>()

  const [isReadyMap, setIsReadyMap] = useState(false)
  const map = useRef<leaflet.Map>()

  const onReadyMap = () => setIsReadyMap(true)

  useEffect(() => {
    if (objectId) {
      const object: Object = objects.data?.find((object) => object.id === +objectId)
      map.current?.flyTo([object.latitude, object.longitude], 10)
    }
  }, [objectId, isReadyMap])

  if (objects.isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner />
      </div>
    )

  return (
    <MapContainer
      ref={map}
      whenReady={onReadyMap}
      className="w-screen h-screen z-10"
      zoomAnimation={true}
      zoom={3}
      center={centerCoordinates}
      scrollWheelZoom={true}
    >
      <TileLayer url={TITLE_URL_MAP} />
      {objects.data?.map(({ latitude: lat, longitude: lng, id, name }) => (
        <ObjectMarker
          onClick={() => {
            navigate(`${ROUTES.OBJECTS_MAP}/${id}`)
          }}
          name={name}
          isActive={id === +objectId}
          key={id}
          position={{ lat, lng }}
        />
      ))}
    </MapContainer>
  )
}
