import { VFC } from 'react'

import Stack from '@mui/material/Stack'

import { SearchResponse } from '@/types/search'
import { RoomCard } from './components/RoomCard'

import * as Presetner from './SearchPagePresenter'

export type Props = {
  data: SearchResponse
}
export const SearchPage: VFC<Props> = (props) => {
  return <Presetner.SearchPage {...props} />
}
