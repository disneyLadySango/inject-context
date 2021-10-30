import { SearchQuery, Room } from '@/types/search'

export interface SearchRoomRepository {
  findList: (param: SearchQuery) => Promise<Room[]>
  findQueryInfo: (uid?: string) => Promise<SearchQuery | null>
}
