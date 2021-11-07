import { useMemo } from 'react'
import { useRouter } from 'next/router'

import {
  ItemFormAddProvider,
  ItemFormEditProvider,
  ItemFromDeleteProvider,
} from './injectable'

export const useInjectionProvider = () => {
  const { asPath, query } = useRouter()
  const isAdd = !query.id
  const Provider = useMemo(() => {
    if (!query.id) {
      return ItemFormAddProvider
    }
    if (asPath.includes('delete')) {
      return ItemFromDeleteProvider
    }
    return ItemFormEditProvider
  }, [asPath, query.id])
  return Provider
}
