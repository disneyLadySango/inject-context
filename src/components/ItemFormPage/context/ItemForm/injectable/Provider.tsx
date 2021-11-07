import { createContext, ReactNode, VFC } from 'react'
import { Area } from '@/types/item'

export type ItemValueType = {
  name?: string
  price?: number
  area?: Area
  description?: string
}
type ItemFormInputContextType = {
  disabled: boolean
  defaultItem: ItemValueType
  dispatch: (editValue: ItemValueType) => void
}
type ItemFormButtonContextType = {
  disabled: boolean
  text: string
  onSubmit: () => Promise<void>
}

export const ItemFormInputContext =
  createContext<ItemFormInputContextType | null>(null)
export const ItemFormButtonContext =
  createContext<ItemFormButtonContextType | null>(null)

export const Provider: VFC<{
  form: ItemFormInputContextType
  button: ItemFormButtonContextType
  children: ReactNode
}> = ({ form, button, children }) => {
  return (
    <ItemFormInputContext.Provider value={form}>
      <ItemFormButtonContext.Provider value={button}>
        {children}
      </ItemFormButtonContext.Provider>
    </ItemFormInputContext.Provider>
  )
}
