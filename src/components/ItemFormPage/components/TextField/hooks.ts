import { useCallback, useMemo, useState } from 'react'

import { useItemFormInput } from '@/components/ItemFormPage/context/ItemForm'

export const useTextField = (
  fieldKey: 'name' | 'price' | 'description',
  isNum: boolean,
) => {
  const { disabled, dispatch, defaultItem } = useItemFormInput()

  const [value, setValue] = useState<string>(
    defaultItem[fieldKey] ? String(defaultItem[fieldKey]) : '',
  )

  const onChange = useCallback((newValue: string) => {
    setValue(newValue)
  }, [])

  const onBlur = useCallback(() => {
    dispatch({ [fieldKey]: isNum ? parseInt(value) : value })
  }, [dispatch, fieldKey, isNum, value])

  return useMemo(
    () => ({
      disabled,
      value,
      inputMode: (isNum ? 'numeric' : 'text') as 'numeric' | 'text',
      type: (isNum ? 'number' : 'text') as 'number' | 'text',
      onChange,
      onBlur,
    }),
    [disabled, value, onChange, onBlur, isNum],
  )
}
