import { VFC } from 'react'

import { ItemListResponse } from '@/types/item'

import * as Presetner from './ItemsPagePresenter'

export type Props = {
  data: ItemListResponse
}
export const ItemsPage: VFC<Props> = (props) => {
  return <Presetner.ItemsPage {...props} />
}
