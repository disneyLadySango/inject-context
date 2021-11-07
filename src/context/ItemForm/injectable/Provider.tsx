import { createContext, ReactNode, VFC } from 'react'
import { Area } from '@/types/item'

export type ItemValueType = {
  name?: string
  price?: number
  area?: Area
  description?: string
}
type ItemFormStateContextType = {
  formDisabled: boolean
  buttonDisabled: boolean
  buttonText: string
  defaultItem: ItemValueType
}
type ItemFormActionContextType = {
  dispatch: (editValue: ItemValueType) => void
  onSubmit: () => Promise<void>
}
export const ItemFormStateContext =
  createContext<ItemFormStateContextType | null>(null)
export const ItemFormActionContext =
  createContext<ItemFormActionContextType | null>(null)

export const Provider: VFC<{
  states: ItemFormStateContextType
  actions: ItemFormActionContextType
  children: ReactNode
}> = ({ states, actions, children }) => {
  return (
    <ItemFormActionContext.Provider value={actions}>
      <ItemFormStateContext.Provider value={states}>
        {children}
      </ItemFormStateContext.Provider>
    </ItemFormActionContext.Provider>
  )
}
