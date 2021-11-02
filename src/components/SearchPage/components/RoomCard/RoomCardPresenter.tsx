import { VFC } from 'react'
import styled from 'styled-components'

import NextImage from 'next/image'

import Typography from '@mui/material/Typography'

import { Room } from '@/types/search'

const StyledRoomCard = styled.div`
  display: flex;
`
const StyledImageWrap = styled.div`
  border-radius: 3px;
  img {
    border-radius: 3px;
  }
`
const StyledCardContent = styled.div`
  padding-left: 16px;
`
const StyledTitle = styled.p`
  margin: 0;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 1.35;
  text-overflow: ellipsis;
  letter-spacing: 0.05em;
  white-space: nowrap;
`
const StyledLableContent = styled.div`
  display: flex;
  align-items: center;
`
const StyledPrice = styled.p`
  margin-top: 12px;
  font-size: 1.4rem;
  line-height: 1.35;
  span {
    margin-left: 4px;
    font-size: 1rem;
  }
`
const StyledArea = styled.div`
  display: inline-block;
  margin: 12px 20px;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: rgb(243, 243, 243);
`
export const RoomCard: VFC<Room> = ({
  name,
  area,
  price,
  description,
  image,
}) => {
  return (
    <StyledRoomCard>
      <StyledImageWrap>
        <NextImage
          src={image}
          width={400}
          height={250}
          layout="fixed"
          objectFit="cover"
        />
      </StyledImageWrap>
      <StyledCardContent>
        <StyledTitle>{name}</StyledTitle>
        <StyledLableContent>
          <StyledPrice>
            {`¥${price.toLocaleString()}`}
            <span>/日</span>
          </StyledPrice>
          <StyledArea>{`エリア：${area}`}</StyledArea>
        </StyledLableContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </StyledCardContent>
    </StyledRoomCard>
  )
}
