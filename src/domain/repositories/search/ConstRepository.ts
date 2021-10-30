import { SearchQuery } from '@/types/search'
import { SearchRoomRepository } from './interface'

import { ROOM_DATA, QUERY_DATA } from './mock'

export class ConstSearchRoomRepository implements SearchRoomRepository {
  async findList(param: SearchQuery) {
    const { keyword, maxPrice, area } = param
    return await Promise.resolve(
      ROOM_DATA.filter((room) => {
        if (keyword) {
          // キーワードがある場合
          const hasKeyword = room.description.includes(keyword)
          if (!hasKeyword) return false
        }
        if (maxPrice) {
          // Priceがある場合
          const overPrice = room.price >= maxPrice
          if (overPrice) return false
        }
        if (area) {
          // エリアがある場合
          const equalArea = room.area === area
          if (!equalArea) return false
        }
        return true
      })
    )
  }

  async findQueryInfo(uid?: string) {
    if (!uid) return Promise.resolve(null)
    const query = QUERY_DATA[uid]
    return await Promise.resolve(query || null)
  }
}
