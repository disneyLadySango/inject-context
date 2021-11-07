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

  const states = useMemo(
    () => ({
      formDisabled: false,
      defaultItem: data.item as ItemValueType,
      buttonText: '更新する',
      buttonDisabled: !validateSubmitValue(submitValue),
    }),
    [data, submitValue],
  )
  const actions = useMemo(() => ({ dispatch, onSubmit }), [dispatch, onSubmit])

  return [states, actions] as const
}
