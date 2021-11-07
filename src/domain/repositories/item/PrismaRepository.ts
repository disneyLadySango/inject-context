import { PrismaClient } from '@prisma/client'

import { Item, ItemFormRequest, SearchQuery } from '@/types/item'
import { ItemRepository } from './interface'

import { ITEM_DEFAULT_DATA } from './mock'

export class PrismaItemRepository implements ItemRepository {
  itemList: Item[]
  client: PrismaClient

  constructor() {
    this.itemList = [...ITEM_DEFAULT_DATA]
    this.client = new PrismaClient()
  }

  async findList(param: SearchQuery): Promise<Item[]> {
    const { keyword, maxPrice, area } = param
    const keywordContains = keyword
      ? {
          OR: [
            {
              name: {
                contains: keyword,
              },
            },
            {
              description: {
                contains: keyword,
              },
            },
          ],
        }
      : {}
    const maxPriceLte = maxPrice
      ? {
          price: {
            lte: maxPrice,
          },
        }
      : {}
    const areaEqual = area ? { area } : {}
    const list = await this.client.item.findMany({
      where: {
        AND: {
          ...keywordContains,
          ...maxPriceLte,
          ...areaEqual,
        },
      },
    })
    return list as Item[]
  }

  async findItem(id: number): Promise<Item> {
    const item = await this.client.item.findUnique({
      where: {
        id: id,
      },
    })
    if (!item) {
      return Promise.reject()
    }
    return item as Item
  }

  async addItem(param: ItemFormRequest): Promise<boolean> {
    const result = await this.client.item.create({
      data: {
        ...param,
      },
    })
    if (!result) {
      return Promise.reject()
    }
    return true
  }

  async updateItem(id: number, param: ItemFormRequest): Promise<boolean> {
    const result = await this.client.item.update({
      where: {
        id: id,
      },
      data: {
        ...param,
      },
    })
    if (!result) {
      return Promise.reject()
    }
    return true
  }

  async deleteItem(id: number): Promise<boolean> {
    const result = await this.client.item.delete({
      where: {
        id: id,
      },
    })
    if (!result) {
      return Promise.reject()
    }
    return true
  }
}
