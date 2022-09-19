import { useQuery } from 'react-query'

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { fetcher } from '@/lib/api'

import { Object } from '../types'

const getObjects = (searchNameBy?: string): Promise<Object[]> => {
  return fetcher(`objects`, { ['name_like']: searchNameBy })
}

type QueryFnType = typeof getObjects

type UseObjectsOptions = {
  searchNameBy?: string
  config?: QueryConfig<QueryFnType>
}

export const useObjects = ({ searchNameBy, config }: UseObjectsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['objects', searchNameBy],
    queryFn: () => getObjects(searchNameBy),
    ...config,
  })
}
