import { SearchQuery, Item, ItemFormRequest } from '@/types/item'

export interface ItemRepository {
  findList: (param: SearchQuery) => Promise<Item[]>
  findItem: (id: number) => Promise<Item>
  addItem: (param: ItemFormRequest) => Promise<boolean>
  updateItem: (id: number, param: ItemFormRequest) => Promise<boolean>
  deleteItem: (id: number) => Promise<boolean>
}
