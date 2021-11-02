import { useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { SearchQuery, SearchQueryKey, SearchResponse } from '@/types/search'

export const useSearchQueryCore = (data: SearchResponse) => {
  const router = useRouter()

  const searchQuery: SearchQuery = useMemo(() => data.query || {}, [data])

  const push = useCallback(
    (newSearchQuery: SearchQuery) => {
      const query = Object.keys(newSearchQuery).reduce((prev, key) => {
        const value = newSearchQuery[key as SearchQueryKey]
        if (!!value) {
          // @ts-ignore
          prev[key as SearchQueryKey] = value
        }
        return prev
      }, {} as SearchQuery)
      router.push({
        pathname: '/search',
        query,
      })
    },
    [router],
  )

  return useMemo(() => ({ searchQuery, push }), [searchQuery, push])
}
