import { useCallback, useMemo, useState } from 'react'

import { Area } from '@/types/item'

import { useItemFormInput } from '@/components/ItemFormPage/context/ItemForm'

const options = ['東京', '大阪', '名古屋', '横浜', '仙台', '札幌']
export const useAreaSelectField = () => {
  const { disabled, dispatch, defaultItem } = useItemFormInput()

  const [value, setValue] = useState<Area | ''>(defaultItem.area || '')

  const onChange = useCallback(
    (newArea: Area | '') => {
      setValue(newArea)
      dispatch({ area: newArea || undefined })
    },
    [dispatch],
  )

  return useMemo(
    () => ({
      disabled,
      value,
      options,
      onChange,
    }),
    [disabled, value, onChange],
  )
}
