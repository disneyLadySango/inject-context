import { ReactNode, VFC } from 'react'

import { SearchResponse } from '@/types/search'

import { useInjectionProvider } from './useInjectionProvider'

export const SearchQueryProvider: VFC<{
  data: SearchResponse
  children: ReactNode
}> = ({ data, children }) => {
  const Provider = useInjectionProvider()

  return <Provider data={data}>{children}</Provider>
}
