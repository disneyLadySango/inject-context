import { VFC } from 'react'
import styled from 'styled-components'

import { SearchQuery, SearchResponse } from '@/types/search'

import { SearchFilter } from './components/SearchFilter'
import { RoomCard } from './components/RoomCard'

const StyledSearchPage = styled.div`
  padding: 40px 60px;
`
const StyledRoomCardList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 24px auto 0;
`
const StyledRoomCardWrap = styled.li`
  padding: 24px 16px;
  border-top: 1px solid rgb(234, 234, 234);
`
export const SearchPage: VFC<{
  data: SearchResponse
  searchQuery: SearchQuery
}> = ({ data, searchQuery }) => (
  <StyledSearchPage>
    <SearchFilter {...searchQuery} />
    <StyledRoomCardList>
      {data.results.map((room) => (
        <StyledRoomCardWrap key={room.id}>
          <RoomCard {...room} />
        </StyledRoomCardWrap>
      ))}
    </StyledRoomCardList>
  </StyledSearchPage>
)
