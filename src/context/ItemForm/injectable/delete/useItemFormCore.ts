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

  const states = useMemo(
    () => ({
      formDisabled: true,
      defaultItem: data.item,
      buttonText: '削除する',
      buttonDisabled: false,
    }),
    [data.item],
  )
  const actions = useMemo(() => ({ dispatch, onSubmit }), [dispatch, onSubmit])

  return [states, actions] as const
}
