import { VFC } from 'react'
import { useTextField } from './hooks'

import * as Presenter from './TextFieldPresenter'

type Props = {
  label: string
  helperText: string
  fieldKey: 'name' | 'price' | 'description'
  rows?: number
  isNum?: boolean
}

export const TextField: VFC<Props> = ({
  fieldKey,
  rows = 1,
  isNum = false,
  ...presenterProps
}) => {
  const textFieldProps = useTextField(fieldKey, isNum)
  return (
    <Presenter.TextField rows={rows} {...presenterProps} {...textFieldProps} />
  )
}
