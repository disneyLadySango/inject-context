import { VFC } from 'react'

import { useItemFormButton } from '@/components/ItemFormPage/context/ItemForm'

import * as Presenter from './SubmitButtonPresenter'

export const SubmitButton: VFC = () => {
  const buttonProps = useItemFormButton()
  return <Presenter.SubmitButton {...buttonProps} />
}
