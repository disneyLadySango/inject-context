import {
  ItemRepository,
  PrismaItemRepository as ItemRepositoryImpl,
} from '@/domain/repositories/item'
import {
  ItemFormRequest,
  ItemListResponse,
  ItemResponse,
  SearchQuery,
} from '@/types/item'

class ItemService {
  private itemRepository: ItemRepository
  constructor(repository: ItemRepository) {
    this.itemRepository = repository
  }

  async findList(param?: SearchQuery): Promise<ItemListResponse> {
    const lists = await this.itemRepository.findList(param || {})
    return {
      lists,
    }
  }

  async findItem(id: number): Promise<ItemResponse> {
    const item = await this.itemRepository.findItem(id)
    if (!item) throw new Error('IDの値のデータが見つかりません')
    return {
      item,
    }
  }

  async addItem(param: ItemFormRequest): Promise<ItemListResponse> {
    await this.itemRepository.addItem(param)
    return await this.findList()
  }

  async updateItem(
    id: number,
    param: ItemFormRequest,
  ): Promise<ItemListResponse> {
    const result = await this.itemRepository.updateItem(id, param)
    if (!result) throw new Error('APIでエラーです')
    return await this.findList()
  }

  async deleteItem(id: number): Promise<ItemListResponse> {
    await this.itemRepository.deleteItem(id)
    return await this.findList()
  }
}

// 仮装DIコンテナ
const createInstance = () => {
  console.log('CHECK_CREATE')
  return new ItemService(new ItemRepositoryImpl())
}

const instance = createInstance()

export default instance
