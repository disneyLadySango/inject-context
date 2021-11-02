import { VFC } from 'react'

import { SearchQuery, SearchResponse } from '@/types/search'

import * as Presetner from './SearchPagePresenter'

export type Props = {
  data: SearchResponse
  searchQuery: SearchQuery
}
export const SearchPage: VFC<Props> = (props) => {
  return <Presetner.SearchPage {...props} />
}
