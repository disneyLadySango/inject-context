import { ReactNode, VFC } from 'react'

import { ItemResponse } from '@/types/item'

import { Provider } from '../Provider'
import { useItemFormCore } from './useItemFormCore'

export const ItemFormProvider: VFC<{
  data: ItemResponse
  children: ReactNode
}> = ({ data, children }) => {
  const [states, actions] = useItemFormCore(data)
  return (
    <Provider states={states} actions={actions}>
      {children}
    </Provider>
  )
}
