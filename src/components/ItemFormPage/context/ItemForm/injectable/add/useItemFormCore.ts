import { useCallback, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { ItemFormRequest, ItemResponse } from '@/types/item'

import { ItemValueType } from '..'
import { validateSubmitValue } from '../utils'

const defaultItem = {} as ItemValueType

export const useItemFormCore = (_: ItemResponse) => {
  const { asPath, push } = useRouter()
  const [submitValue, setSubmitValue] = useState<
    ItemFormRequest | ItemValueType
  >({})
  const dispatch = useCallback((newValue: ItemValueType) => {
    setSubmitValue((prev) => ({ ...prev, ...newValue }))
  }, [])

  const onSubmit = useCallback(async () => {
    const url = `http://localhost:3000/api${asPath}`
    const result = await fetch(url, {
      method: 'POST',
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
      defaultItem,
      dispatch,
    }),
    [dispatch],
  )

  const button = useMemo(
    () => ({
      disabled: !validateSubmitValue(submitValue as ItemFormRequest),
      text: '追加する',
      onSubmit,
    }),
    [onSubmit, submitValue],
  )

  return [form, button] as const
}
