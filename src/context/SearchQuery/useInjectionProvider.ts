import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

import {
  SearchQueryProviderByQuery,
  SearchQueryProviderByUid,
} from './injectable'

export const useInjectionProvider = () => {
  const router = useRouter()
  const hasUid = !!router.query.uid

  const Provider = useMemo(
    () => (hasUid ? SearchQueryProviderByUid : SearchQueryProviderByQuery),
    [hasUid],
  )
  return Provider
}
