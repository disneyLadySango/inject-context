import { createContext, ReactNode, VFC } from 'react'
import { SearchQuery } from '@/types/search'

type SearchQueryContext = {
  searchQuery: SearchQuery
  push: (query: SearchQuery) => void
}
export const SearchQueryContext = createContext<SearchQueryContext | null>(null)

export const Provider: VFC<{
  injectValue: SearchQueryContext
  children: ReactNode
}> = ({ injectValue, children }) => {
  return (
    <SearchQueryContext.Provider value={injectValue}>
      {children}
    </SearchQueryContext.Provider>
  )
}
