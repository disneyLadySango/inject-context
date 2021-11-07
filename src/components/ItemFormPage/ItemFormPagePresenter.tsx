import { VFC } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

import { Area } from '@/types/item'
import { ItemValueType } from 'src/context/ItemForm'

const StyledItemFormPage = styled.div`
  padding: 20px 60px;
`

type FormTextFieldType = {
  value: string | undefined
  onChange: (value: string) => void
}
type ItemFormPageProps = {
  nameProps: FormTextFieldType
  priceProps: FormTextFieldType
  areaProps: FormTextFieldType
  descriptionProps: FormTextFieldType
  buttonProps: {
    buttonText: string
    disabled: boolean
    onSubmit: () => Promise<void>
  }
  formDisabled: boolean
  dispatch: (value: ItemValueType) => void
}
export const ItemFormPage: VFC<ItemFormPageProps> = ({
  nameProps,
  priceProps,
  areaProps,
  descriptionProps,
  buttonProps,
  formDisabled,
  dispatch,
}) => (
  <StyledItemFormPage>
    <div>
      <FormTextField
        label="名前"
        helperText="名前を入力してください"
        dispatchKey="name"
        dispatch={dispatch}
        disabled={formDisabled}
        {...nameProps}
      />
      <FormTextField
        label="価格"
        helperText="価格を入力してください"
        dispatchKey="price"
        dispatch={dispatch}
        disabled={formDisabled}
        isNum
        {...priceProps}
      />
      <AreaSelectField
        {...areaProps}
        dispatch={dispatch}
        disabled={formDisabled}
      />
      <FormTextField
        label="商品説明"
        helperText="商品の説明文を入力してください"
        rows={5}
        dispatchKey="description"
        dispatch={dispatch}
        disabled={formDisabled}
        {...descriptionProps}
      />
    </div>
    <NextLink href="/admin/items">
      <Button variant="outlined" size="small" color="secondary">
        一覧ページへ戻る
      </Button>
    </NextLink>
    <Button
      variant="outlined"
      size="small"
      onClick={async (event) => {
        event.preventDefault()
        await buttonProps.onSubmit()
      }}
      disabled={buttonProps.disabled}
    >
      {buttonProps.buttonText}
    </Button>
  </StyledItemFormPage>
)

const FormTextField: VFC<{
  label: string
  helperText: string
  rows?: number | undefined
  value: string | undefined
  dispatchKey: string
  isNum?: boolean
  disabled: boolean
  onChange: (value: string) => void
  dispatch: (value: ItemValueType) => void
}> = ({
  label,
  helperText,
  rows = 1,
  value,
  dispatchKey,
  isNum,
  disabled,
  onChange,
  dispatch,
}) => {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        variant="filled"
        margin="dense"
        required
        multiline
        label={label}
        helperText={helperText}
        rows={rows}
        defaultValue={value}
        disabled={disabled}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        onBlur={() =>
          dispatch({
            [dispatchKey]: isNum ? parseInt(value as string) : value,
          })
        }
        inputMode={isNum ? 'numeric' : 'text'}
        type={isNum ? 'number' : 'text'}
      />
    </FormControl>
  )
}

const options = ['東京', '大阪', '名古屋', '横浜', '仙台', '札幌']
const AreaSelectField: VFC<{
  value: string | undefined
  disabled: boolean
  onChange: (value: string) => void
  dispatch: (value: ItemValueType) => void
}> = ({ value, disabled, onChange: onChangeImpl, dispatch }) => {
  const onChange = (newArea: Area) => {
    onChangeImpl(newArea)
    dispatch({ area: newArea })
  }

  return (
    <FormControl fullWidth>
      <TextField
        select
        label="エリア"
        variant="filled"
        margin="dense"
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
      </TextField>
    </FormControl>
  )
}
