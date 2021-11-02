import { useContext } from 'react'
import { SearchQueryContext } from './Provider'

export const useSearchQuery = () => {
  const context = useContext(SearchQueryContext)
  if (context === null) {
    throw new Error('SearchQueryProviderが使われていません')
  }
  return context
}
