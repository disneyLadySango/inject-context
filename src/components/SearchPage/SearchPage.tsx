import { VFC } from 'react'

import { SearchResponse } from '@/types/search'

import * as Presetner from './SearchPagePresenter'

export type Props = {
  data: SearchResponse
}
export const SearchPage: VFC<Props> = (props) => {
  return <Presetner.SearchPage {...props} />
}
