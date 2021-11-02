import { VFC, ReactNode } from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button'

const StyledSearchFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 300px;
`
export const SearchFilter: VFC<{ onClick: () => void; children: ReactNode }> =
  ({ onClick, children }) => (
    <StyledSearchFilter>
      {children}
      <Button
        variant="outlined"
        size="small"
        onClick={(event) => {
          event.preventDefault()
          onClick()
        }}
      >
        検索実行
      </Button>
    </StyledSearchFilter>
  )
