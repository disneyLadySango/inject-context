import { useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Area, SearchQuery, SearchQueryKey } from '@/types/search'

export const useSearchQueryCore = () => {
  const router = useRouter()

  const searchQuery: SearchQuery = useMemo(() => {
    const {
      query: { keyword, maxPrice, area },
    } = router
    return {
      keyword: typeof keyword === 'string' ? keyword : undefined,
      maxPrice:
        typeof maxPrice === 'string' && maxPrice !== '0'
          ? parseInt(maxPrice)
          : undefined,
      area: typeof area === 'string' ? (area as Area) : undefined,
    }
  }, [router])

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
