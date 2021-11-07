import { VFC } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import Button from '@mui/material/Button'

import { SubmitButton } from './components/SubmitButton'
import { TextField } from './components/TextField'
import { AreaSelectField } from './components/AreaSelectField'

const StyledItemFormPage = styled.div`
  padding: 20px 60px;
`

export const ItemFormPage: VFC = () => (
  <StyledItemFormPage>
    <div>
      <TextField
        label="名前"
        helperText="名前を入力してください"
        fieldKey="name"
      />
      <TextField
        label="価格"
        helperText="価格を入力してください"
        fieldKey="price"
        isNum
      />
      <AreaSelectField />
      <TextField
        label="商品説明"
        helperText="商品の説明文を入力してください"
        fieldKey="description"
        rows={5}
      />
    </div>
    <NextLink href="/admin/items">
      <Button variant="outlined" size="small" color="secondary">
        一覧ページへ戻る
      </Button>
    </NextLink>
    <SubmitButton />
  </StyledItemFormPage>
)
