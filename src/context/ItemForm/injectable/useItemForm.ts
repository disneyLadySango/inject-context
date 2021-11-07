import { useContext } from 'react'
import { ItemFormStateContext, ItemFormActionContext } from './Provider'

export const useItemFormState = () => {
  const context = useContext(ItemFormStateContext)
  if (context === null) {
    throw new Error('ItemFormStateのProviderが使われていません')
  }
  return context
}

export const useItemFormAction = () => {
  const context = useContext(ItemFormActionContext)
  if (context === null) {
    throw new Error('ItemFormActionのProviderが使われていません')
  }
  return context
}
