import { useContext } from 'react'
import { ItemFormInputContext, ItemFormButtonContext } from './Provider'

export const useItemFormInput = () => {
  const context = useContext(ItemFormInputContext)
  if (context === null) {
    throw new Error('ItemFormInputのProviderが使われていません')
  }
  return context
}

export const useItemFormButton = () => {
  const context = useContext(ItemFormButtonContext)
  if (context === null) {
    throw new Error('ItemFormButtonのProviderが使われていません')
  }
  return context
}
