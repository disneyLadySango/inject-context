import { useCallback, useMemo, useState } from 'react'
import { useItemFormAction, useItemFormState } from 'src/context/ItemForm'

const useFormTextField = (defaultValue?: string | undefined) => {
  const [value, setValue] = useState(defaultValue || '')
  const onChange = useCallback(
    (newValue: string): void => setValue(newValue),
    [],
  )

  return useMemo(() => ({ value, onChange }), [value, onChange])
}

export const useItemForm = () => {
  const { defaultItem, buttonDisabled, formDisabled, buttonText } =
    useItemFormState()
  const { dispatch, onSubmit } = useItemFormAction()

  const nameProps = useFormTextField(defaultItem.name)
  const priceProps = useFormTextField(
    defaultItem.price ? String(defaultItem.price) : undefined,
  )
  const areaProps = useFormTextField(defaultItem.area)
  const descriptionProps = useFormTextField(defaultItem.description)

  const buttonProps = useMemo(
    () => ({
      disabled: buttonDisabled,
      buttonText,
      onSubmit,
    }),
    [buttonDisabled, buttonText, onSubmit],
  )

  return useMemo(
    () => ({
      nameProps,
      priceProps,
      areaProps,
      descriptionProps,
      buttonProps,
      formDisabled,
      dispatch,
    }),
    [
      nameProps,
      priceProps,
      areaProps,
      descriptionProps,
      buttonProps,
      formDisabled,
      dispatch,
    ],
  )
}
