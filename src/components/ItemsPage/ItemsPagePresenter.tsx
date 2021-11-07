import { VFC } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

import { ItemListResponse } from '@/types/item'

import { SearchFilter } from './components/SearchFilter'

const StyledItemsPage = styled.div`
  padding: 40px 60px;
`
const StyledAddButton = styled.div`
  padding: 20px 0;
`
export const ItemsPage: VFC<{
  data: ItemListResponse
}> = ({ data }) => (
  <StyledItemsPage>
    <SearchFilter />
    <StyledAddButton>
      <NextLink href={`/admin/items/new`}>
        <Button variant="outlined" size="large" color="primary">
          アイテムを追加する
        </Button>
      </NextLink>
    </StyledAddButton>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>エリア</TableCell>
            <TableCell>価格</TableCell>
            <TableCell>説明文</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.lists.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.area}</TableCell>
              <TableCell>{`¥${item.price.toLocaleString()}`}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <NextLink href={`/admin/items/${item.id}`}>
                  <Button variant="outlined" size="small" color="primary">
                    編集
                  </Button>
                </NextLink>
              </TableCell>
              <TableCell>
                <NextLink href={`/admin/items/delete/${item.id}`}>
                  <Button variant="outlined" size="small" color="primary">
                    削除
                  </Button>
                </NextLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </StyledItemsPage>
)
