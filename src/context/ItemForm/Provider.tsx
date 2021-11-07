import { ReactNode, VFC } from 'react'

import { ItemResponse } from '@/types/item'

import { useInjectionProvider } from './useInjectionProvider'

export const ItemFormProvider: VFC<{
  data: ItemResponse
  children: ReactNode
}> = ({ data, children }) => {
  const Provider = useInjectionProvider()

  return <Provider data={data}>{children}</Provider>
}
