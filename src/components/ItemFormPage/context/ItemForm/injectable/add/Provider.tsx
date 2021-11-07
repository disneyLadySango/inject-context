import { ReactNode, VFC } from 'react'

import { ItemResponse } from '@/types/item'

import { Provider } from '../Provider'
import { useItemFormCore } from './useItemFormCore'

export const ItemFormProvider: VFC<{
  data: ItemResponse
  children: ReactNode
}> = ({ data, children }) => {
  const [form, button] = useItemFormCore(data)
  return (
    <Provider form={form} button={button}>
      {children}
    </Provider>
  )
}
