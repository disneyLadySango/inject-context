import { Dispatch, SetStateAction, useCallback, useState, VFC } from 'react'
import { useRouter } from 'next/router'

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import { SearchQuery, Area } from '@/types/search'

import * as Presenter from './SearchFilterPresenter'
import { route } from 'next/dist/server/router'

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

type Props = SearchQuery
type SearchQueryKey = 'keyword' | 'maxPrice' | 'area'
export const SearchFilter: VFC<Props> = ({ keyword, maxPrice, area }) => {
  const router = useRouter()
  const [submitValue, setSubmitValue] = useState<SearchQuery>({
    keyword,
    maxPrice,
    area,
  })
  const onSubmit = useCallback(() => {
    const query = Object.keys(submitValue).reduce((prev, key) => {
      const value = submitValue[key as SearchQueryKey]
      if (!!value) {
        // @ts-ignore
        prev[key as SearchQueryKey] = value
      }
      return prev
    }, {} as SearchQuery)
    router.push({
      pathname: '/search',
      query,
    })
  }, [router, submitValue])

  return (
    <Presenter.SearchFilter onClick={onSubmit}>
      <KeywordInput keyword={keyword} dispatch={setSubmitValue} />
      <MaxPriceInput maxPrice={maxPrice} dispatch={setSubmitValue} />
      <AreaSelect selectedArea={area} dispatch={setSubmitValue} />
    </Presenter.SearchFilter>
  )
}
