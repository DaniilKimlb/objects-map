import { Map, Objects } from '../components/'

export const ObjectsMap = () => {
  return (
    <>
      <a
        style={{ position: 'absolute' }}
        href="#objects"
        className="sr-only z-30 top-0 h-fit bg-amber-200 focus:not-sr-only"
      >
        Skip to objects
      </a>
      <Map />
      <Objects id={'objects'} />
    </>
  )
}
