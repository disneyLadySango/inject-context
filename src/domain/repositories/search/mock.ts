import { Room, SearchQuery } from '@/types/search'

export const QUERY_DATA: Record<string, SearchQuery> = {
  bbq: {
    keyword: 'BBQ',
  },
  shoot: {
    keyword: '撮影',
  },
  tokyoSale: {
    maxPrice: 20000,
    area: '東京',
  },
}

export const ROOM_DATA: ReadonlyArray<Room> = [
  {
    id: 1,
    name: '海の見える古民家',
    area: '横浜',
    price: 10000,
    description:
      '海の見える立地の古民家なスペースです。海辺ではBBQなども可能です。',
    image: '/images/rooms/001.jpg',
  },
  {
    id: 2,
    name: '東京タワー',
    area: '東京',
    price: 1000000,
    description: '皆さんご存知の東京タワーを貸し切りできます。',
    image: '/images/rooms/002.jpg',
  },
  {
    id: 3,
    name: '駅のホーム',
    area: '名古屋',
    price: 9000,
    description:
      '駅のホームを電車の営業時間外の間使えます。撮影向きです。飲食はご遠慮ください。',
    image: '/images/rooms/003.jpg',
  },
  {
    id: 4,
    name: '雪まつり展示スペース',
    area: '札幌',
    price: 5000,
    description:
      '雪まつりの展示スペースをお貸しします。個人制作物の展示などでご利用ください。期間限定販売です。',
    image: '/images/rooms/004.jpg',
  },
  {
    id: 5,
    name: '自然があふれる田んぼのスペース',
    area: '仙台',
    price: 1000,
    description: '田んぼのスペースです。田植えの体験や撮影などで是非',
    image: '/images/rooms/005.jpg',
  },
  {
    id: 6,
    name: 'グリコの見える道頓堀のパーティールーム',
    area: '大阪',
    price: 40000,
    description:
      '道頓堀にあるパーティールームです。カラオケ施設なども用意あります',
    image: '/images/rooms/006.jpg',
  },
  {
    id: 7,
    name: 'お肉屋さんの運営するスペース',
    area: '仙台',
    price: 20000,
    description:
      'お肉屋さんが運営しているスペースです。焼肉パーティやBBQなどで使う場合はお肉もご用意します。',
    image: '/images/rooms/007.jpg',
  },
  {
    id: 8,
    name: '動物と触れ合えるスペース',
    area: '東京',
    price: 7000,
    description: '動物と触れ合えます。撮影OKです。',
    image: '/images/rooms/008.jpg',
  },
  {
    id: 9,
    name: '夜景を楽しむ',
    area: '横浜',
    price: 800,
    description:
      '横浜の夜景を楽しむことができます。撮影のほかイベントなどでも利用可能です。',
    image: '/images/rooms/009.jpg',
  },
  {
    id: 10,
    name: 'キャンプ場',
    area: '東京',
    price: 6000,
    description:
      'キャンプ場です。BBQもできます。材料などはご自身でご用意ください。',
    image: '/images/rooms/010.jpg',
  },
]
