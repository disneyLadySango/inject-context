import Button from '@mui/material/Button'
import { VFC } from 'react'

type Props = {
  disabled: boolean
  text: string
  onSubmit: () => Promise<void>
}
export const SubmitButton: VFC<Props> = ({ disabled, text, onSubmit }) => (
  <Button
    variant="outlined"
    size="small"
    disabled={disabled}
    onClick={async (event) => {
      event.preventDefault()
      await onSubmit()
    }}
  >
    {text}
  </Button>
)
