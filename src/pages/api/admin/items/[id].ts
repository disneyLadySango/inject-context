import type { NextApiRequest, NextApiResponse } from 'next'

import { ItemListResponse, ItemResponse } from '@/types/item'
import ItemService from '@/domain/service/ItemService'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ItemListResponse | ItemResponse>,
) => {
  const { method, body, query } = req
  try {
    if (method === 'GET') {
      const response = await ItemService.findItem(parseInt(query.id as string))
      res.status(200).json({ ...response })
    } else if (method === 'POST' && query.id === 'new') {
      const response = await ItemService.addItem(JSON.parse(body))
      res.status(200).json({ ...response })
    } else if (method === 'PATCH') {
      const response = await ItemService.updateItem(
        parseInt(query.id as string),
        JSON.parse(body),
      )
      res.status(200).json({ ...response })
    } else if (method === 'DELETE') {
      const response = await ItemService.deleteItem(
        parseInt(query.id as string),
      )
      res.status(200).json({ ...response })
    } else {
      res.status(404)
    }
  } catch (error) {
    res.status(404).json(error as any)
  }
}

export default handler
