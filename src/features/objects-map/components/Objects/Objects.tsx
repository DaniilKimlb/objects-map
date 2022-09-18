import { useObjects } from '@/features/objects-map/api/getObjects'
import React, { useState } from 'react'
import { Spinner } from '@/components/Elements/Spinner'
import { useDebounce } from '@/hooks/debounce.hook'
import { ObjectSearch } from '@/features/objects-map/components/Objects/ObjectSearch'
import { ObjectList } from '@/features/objects-map/components/Objects/ObjectList'

export const Objects = ({ id }) => {
  const [valueSearch, setValueSearch] = useState<string>()

  const debouncedValueSearch = useDebounce(valueSearch, 300)

  const onChangeSearch = (e) => {
    setValueSearch(e.target.value)
  }

  const objects = useObjects({ searchNameBy: debouncedValueSearch })

  return (
    <section
      id={id}
      className="bg-white absolute z-40 overflow-auto right-6 top-6 bottom-6 w-full max-w-[360px] rounded-2xl"
    >
      <header className="px-4 py-3">
        <h3 className="text-2xl font-medium">Objects</h3>
      </header>
      <ObjectSearch onChange={onChangeSearch} value={valueSearch} />
      {objects.isLoading ? (
        <div className="w-full flex justify-center mt-2">
          <Spinner />
        </div>
      ) : (
        <ObjectList objects={objects.data} />
      )}
    </section>
  )
}
