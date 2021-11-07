import { VFC } from 'react'

import { useItemForm } from './hooks'
import * as Presenter from './ItemFormPagePresenter'

export const ItemFormPage: VFC<any> = () => {
  const props = useItemForm()
  return <Presenter.ItemFormPage {...props} />
}
