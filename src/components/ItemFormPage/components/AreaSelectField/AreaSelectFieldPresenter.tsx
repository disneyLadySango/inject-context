import { VFC } from 'react'

import FormControl from '@mui/material/FormControl'
import TextFieldMUI from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import { Area } from '@/types/item'

export const AreaSelectField: VFC<{
  value: string
  disabled: boolean
  options: string[]
  onChange: (value: Area) => void
}> = ({ value, disabled, options, onChange }) => (
  <FormControl fullWidth>
    <TextFieldMUI
      select
      variant="filled"
      margin="dense"
      label="エリア"
      helperText="検索したいエリアを選択してください"
      value={value}
      disabled={disabled}
      onChange={(event) => {
        onChange(event.target.value as Area)
      }}
    >
      <MenuItem value={''}>{'未指定'}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextFieldMUI>
  </FormControl>
)
