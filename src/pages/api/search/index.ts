import type { NextApiRequest, NextApiResponse } from 'next'

import { SearchResponse } from '@/types/search'
import { SearchRoomService } from '@/domain/service/SearchService'
import { ConstSearchRoomRepository } from '@/domain/repositories/search'

const service = new SearchRoomService(new ConstSearchRoomRepository())

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse>,
) => {
  const response = await service.findList(req.query)
  res.status(200).json({ ...response })
}

export default handler
