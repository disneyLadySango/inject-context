const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const DEFAULT_ITEM_DATA = [
  {
    name: '海の見える古民家',
    area: '横浜',
    price: 10000,
    description:
      '海の見える立地の古民家なスペースです。海辺ではBBQなども可能です。',
  },
  {
    name: '東京タワー',
    area: '東京',
    price: 1000000,
    description: '皆さんご存知の東京タワーを貸し切りできます。',
  },
  {
    name: '駅のホーム',
    area: '名古屋',
    price: 9000,
    description:
      '駅のホームを電車の営業時間外の間使えます。撮影向きです。飲食はご遠慮ください。',
  },
  {
    name: '雪まつり展示スペース',
    area: '札幌',
    price: 5000,
    description:
      '雪まつりの展示スペースをお貸しします。個人制作物の展示などでご利用ください。期間限定販売です。',
  },
  {
    name: '自然があふれる田んぼのスペース',
    area: '仙台',
    price: 1000,
    description: '田んぼのスペースです。田植えの体験や撮影などで是非',
  },
  {
    name: 'グリコの見える道頓堀のパーティールーム',
    area: '大阪',
    price: 40000,
    description:
      '道頓堀にあるパーティールームです。カラオケ施設なども用意あります',
  },
  {
    name: 'お肉屋さんの運営するスペース',
    area: '仙台',
    price: 20000,
    description:
      'お肉屋さんが運営しているスペースです。焼肉パーティやBBQなどで使う場合はお肉もご用意します。',
  },
  {
    name: '動物と触れ合えるスペース',
    area: '東京',
    price: 7000,
    description: '動物と触れ合えます。撮影OKです。',
  },
  {
    name: '夜景を楽しむ',
    area: '横浜',
    price: 800,
    description:
      '横浜の夜景を楽しむことができます。撮影のほかイベントなどでも利用可能です。',
  },
  {
    name: 'キャンプ場',
    area: '東京',
    price: 6000,
    description:
      'キャンプ場です。BBQもできます。材料などはご自身でご用意ください。',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  const deleteMany = await prisma.item.deleteMany()
  console.log('DELETE', deleteMany)
  const createMany = await prisma.item.createMany({
    data: DEFAULT_ITEM_DATA,
  })
  console.log('CREATE', createMany)
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
