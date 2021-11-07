import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { ItemFormRequest, ItemResponse } from '@/types/item'

import { ItemValueType } from '..'
import { validateSubmitValue } from '../utils'

export const useItemFormCore = (data: ItemResponse) => {
  const { asPath, push } = useRouter()
  const [submitValue, setSubmitValue] = useState<ItemFormRequest>(data.item)

  const dispatch = useCallback((newValue: ItemValueType) => {
    setSubmitValue((prev) => ({ ...prev, ...newValue }))
  }, [])

  const onSubmit = useCallback(async () => {
    const url = `http://localhost:3000/api${asPath}`
    const result = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(submitValue),
    })
    if (result.status !== 200) {
      throw new Error('ERROR')
    }
    push('http://localhost:3000/admin/items')
  }, [asPath, submitValue, push])

  const form = useMemo(
    () => ({
      disabled: false,
      defaultItem: data.item as ItemValueType,
      dispatch,
    }),
    [data.item, dispatch],
  )
  const button = useMemo(
    () => ({
      disabled: !validateSubmitValue(submitValue),
      text: '更新する',
      onSubmit,
    }),
    [submitValue, onSubmit],
  )

  return [form, button] as const
}
