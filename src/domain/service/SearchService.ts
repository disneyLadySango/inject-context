import {
  SearchRoomRepository,
  ConstSearchRoomRepository as SearchRoomRepositoryImpl,
} from '@/domain/repositories/search'
import { SearchResponse, SearchRequest } from '@/types/search'

export class SearchRoomService {
  searchRoomRepository: SearchRoomRepository
  constructor(repository: SearchRoomRepositoryImpl) {
    this.searchRoomRepository = repository
  }

  async findList(param: SearchRequest): Promise<SearchResponse> {
    const { uid, ...searchQuery } = param
    const query = await this.searchRoomRepository.findQueryInfo(uid)
    const roomList = await this.searchRoomRepository.findList(
      query || searchQuery
    )
    return {
      results: roomList,
      query: query,
    }
  }
}
