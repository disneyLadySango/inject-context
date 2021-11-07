import { ItemFormRequest } from '@/types/item'

export const validateSubmitValue = (submitValue: ItemFormRequest) => {
  const { name, price, area, description } = submitValue
  if (!name) return false
  if (!price) return false
  if (!area) return false
  if (!description) return false
  return true
}
