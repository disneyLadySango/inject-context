import { VFC } from 'react'

import TextFieldMUI from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'

type Props = {
  label: string
  helperText: string
  disabled: boolean
  inputMode: 'numeric' | 'text'
  type: 'number' | 'text'
  value: string | undefined
  rows: number
  onBlur: () => void
  onChange: (value: string) => void
}
export const TextField: VFC<Props> = ({ rows, value, onChange, ...props }) => {
  return (
    <FormControl fullWidth margin="normal">
      <TextFieldMUI
        variant="filled"
        margin="dense"
        required
        multiline
        rows={rows}
        defaultValue={value}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        {...props}
      />
    </FormControl>
  )
}
