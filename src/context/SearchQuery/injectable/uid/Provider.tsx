import { SearchResponse } from '@/types/search'
import { ReactNode, VFC } from 'react'
import { Provider } from '../Provider'
import { useSearchQueryCore } from './useSearchQueryCore'

export const SearchQueryProvider: VFC<{
  data: SearchResponse
  children: ReactNode
}> = ({ data, children }) => {
  const injectValue = useSearchQueryCore(data)
  return <Provider injectValue={injectValue}>{children}</Provider>
}
