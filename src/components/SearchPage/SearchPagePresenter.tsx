import { VFC } from 'react'
import styled from 'styled-components'

import { SearchResponse } from '@/types/search'

import { RoomCard } from './components/RoomCard'

const StyledRoomCardList = styled.ul`
  display: flex;
  flex-direction: column;
`
const StyledRoomCardWrap = styled.li`
  padding: 24px 16px;
  border-top: 1px solid rgb(234, 234, 234);
`
export const SearchPage: VFC<{ data: SearchResponse }> = ({ data }) => (
  <div>
    <StyledRoomCardList>
      {data.results.map((room) => (
        <StyledRoomCardWrap key={room.id}>
          <RoomCard {...room} />
        </StyledRoomCardWrap>
      ))}
    </StyledRoomCardList>
  </div>
)
