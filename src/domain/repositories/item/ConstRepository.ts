import { Item, ItemFormRequest, SearchQuery } from '@/types/item'
import { ItemRepository } from './interface'

import { ITEM_DEFAULT_DATA } from './mock'

export class ConstItemRepository implements ItemRepository {
  itemList: Item[]

  constructor() {
    this.itemList = [...ITEM_DEFAULT_DATA]
  }

  findList(param: SearchQuery): Promise<Item[]> {
    const { keyword, maxPrice, area } = param
    return Promise.resolve(
      this.itemList.filter((item) => {
        if (keyword) {
          // キーワードがある場合
          const itemWord = `${item.name} ${item.description}`
          const hasKeyword = itemWord.includes(keyword)
          if (!hasKeyword) return false
        }
        if (maxPrice) {
          // Priceがある場合
          const overPrice = item.price >= maxPrice
          if (overPrice) return false
        }
        if (area) {
          // エリアがある場合
          const equalArea = item.area === area
          if (!equalArea) return false
        }
        return true
      }),
    )
  }

  findItem(id: number): Promise<Item> {
    const item = this.itemList.find((item) => item.id === id)
    if (!item) {
      return Promise.reject()
    }
    return Promise.resolve(item)
  }

  addItem(param: ItemFormRequest): Promise<boolean> {
    const id = this.itemList.length + 1
    this.itemList.push({ id, ...param })
    return Promise.resolve(true)
  }

  updateItem(id: number, param: ItemFormRequest): Promise<boolean> {
    const itemIndex = this.itemList.findIndex((item) => item.id === id)
    if (itemIndex === -1) {
      return Promise.reject(false)
    }
    this.itemList[itemIndex] = { id, ...param }
    return Promise.resolve(true)
  }

  deleteItem(id: number): Promise<boolean> {
    this.itemList = this.itemList.filter((item) => item.id !== id)
    return Promise.resolve(true)
  }
}
