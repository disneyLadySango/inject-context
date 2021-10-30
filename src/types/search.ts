export type Area = '東京' | '大阪' | '名古屋' | '横浜' | '仙台' | '札幌'

export type SearchQuery = {
  // キーワード検索
  keyword?: string
  // 最大価格
  maxPrice?: number
  // エリア
  area?: Area
}

export type SearchRequest = SearchQuery & {
  // UID
  uid?: string
}

export type SearchResponse = {
  results: Array<Room>
  query: SearchQuery | null
}

export type Room = {
  id: number
  name: string
  area: Area
  price: number
  description: string
  image: string
}
