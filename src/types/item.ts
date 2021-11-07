export type Area = '東京' | '大阪' | '名古屋' | '横浜' | '仙台' | '札幌'
export type SearchQueryKey = 'keyword' | 'maxPrice' | 'area'

// 管理画面での絞り込み条件
export type SearchQuery = {
  // キーワード検索
  keyword?: string
  // 最大価格
  maxPrice?: number
  // エリア
  area?: Area
}

export type ItemListResponse = {
  lists: Array<Item>
}

export type ItemResponse = {
  item: Item
}

export type Item = {
  id: number
  name: string
  area: Area
  price: number
  description: string
}

// IDはURLに設定される
export type ItemFormRequest = {
  name: string
  area: Area
  price: number
  description: string
}
