import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

import { ItemResponse } from '@/types/item'

import { ItemValueType } from '..'

const defaultItem = {} as ItemValueType

export const useItemFormCore = (data: ItemResponse) => {
  const { query, push } = useRouter()

  const dispatch = useCallback((_: ItemValueType) => {
    // 何も実行しない
  }, [])

  const onSubmit = useCallback(async () => {
    const url = `http://localhost:3000/api/admin/items/${query.id}`
    const result = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(data.item),
    })
    if (result.status !== 200) {
      throw new Error('ERROR')
    }
    push('http://localhost:3000/admin/items')
  }, [query.id, data.item, push])

  const form = useMemo(
    () => ({
      disabled: true,
      defaultItem: data.item,
      dispatch,
    }),
    [data.item, dispatch],
  )

  const button = useMemo(
    () => ({
      disabled: false,
      text: '削除する',
      onSubmit,
    }),
    [onSubmit],
  )

  return [form, button] as const
}
