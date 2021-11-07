import type { NextApiRequest, NextApiResponse } from 'next'

import { Area, ItemListResponse } from '@/types/item'
import ItemService from '@/domain/service/ItemService'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ItemListResponse>,
) => {
  const { keyword, maxPrice, area } = req.query
  const response = await ItemService.findList({
    keyword: keyword ? (keyword as string) : undefined,
    area: area ? (area as Area) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice as string) : undefined,
  })
  res.status(200).json({ ...response })
}

export default handler
