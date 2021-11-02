import { Dispatch, SetStateAction, useCallback, useState, VFC } from 'react'

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import { SearchQuery, Area } from '@/types/search'

import * as Presenter from './SearchFilterPresenter'
import { useSearchQuery } from 'src/context/SearchQuery'

const KeywordInput: VFC<{
  keyword: string | undefined
  dispatch: Dispatch<SetStateAction<SearchQuery>>
}> = ({ keyword, dispatch }) => {
  const [value, setValue] = useState(keyword || '')
  const onChange = (newValue: string): void => setValue(newValue)
  return (
    <TextField
      label="キーワード"
      variant="filled"
      margin="dense"
      defaultValue={value}
      onChange={(event) => {
        onChange(event.target.value)
      }}
      onBlur={() => dispatch((prev) => ({ ...prev, keyword: value }))}
      helperText="検索したいキーワードを入力してください"
    />
  )
}

const MaxPriceInput: VFC<{
  maxPrice: number | undefined
  dispatch: Dispatch<SetStateAction<SearchQuery>>
}> = ({ dispatch, maxPrice }) => {
  const [value, setValue] = useState<string>(
    maxPrice || maxPrice === 0 ? maxPrice.toString() : '',
  )
  const onChange = (newValue: string): void => setValue(newValue)

  return (
    <TextField
      label="最大価格"
      variant="filled"
      inputMode="numeric"
      type="number"
      margin="dense"
      defaultValue={value}
      onChange={(event) => {
        onChange(event.target.value)
      }}
      onBlur={() =>
        dispatch((prev) => ({
          ...prev,
          maxPrice: value === '' ? undefined : parseInt(value),
        }))
      }
      helperText="最大価格を入力してください"
    />
  )
}

const options = ['東京', '大阪', '名古屋', '横浜', '仙台', '札幌']
const AreaSelect: VFC<{
  selectedArea: Area | undefined
  dispatch: Dispatch<SetStateAction<SearchQuery>>
}> = ({ selectedArea, dispatch }) => {
  const [value, setValue] = useState<Area | ''>(selectedArea || '')
  const onChange = (newArea: Area) => {
    setValue(newArea)
    dispatch((prev) => ({ ...prev, area: newArea }))
  }

  return (
    <TextField
      select
      label="エリア"
      variant="filled"
      margin="dense"
      value={value}
      onChange={(event) => {
        onChange(event.target.value as Area)
      }}
      helperText="検索したいエリアを選択してください"
    >
      <MenuItem value={''}>{'未指定'}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}

export const SearchFilter: VFC = () => {
  const { push, searchQuery } = useSearchQuery()
  const [submitValue, setSubmitValue] = useState<SearchQuery>({
    ...searchQuery,
  })
  const onSubmit = useCallback(() => {
    push(submitValue)
  }, [push, submitValue])

  return (
    <Presenter.SearchFilter onClick={onSubmit}>
      <KeywordInput keyword={submitValue.keyword} dispatch={setSubmitValue} />
      <MaxPriceInput
        maxPrice={submitValue.maxPrice}
        dispatch={setSubmitValue}
      />
      <AreaSelect selectedArea={submitValue.area} dispatch={setSubmitValue} />
    </Presenter.SearchFilter>
  )
}
