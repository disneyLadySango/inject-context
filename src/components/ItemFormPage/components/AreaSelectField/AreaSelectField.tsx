import { VFC } from 'react'

import { useAreaSelectField } from './hooks'
import * as Presenter from './AreaSelectFieldPresenter'

export const AreaSelectField: VFC = () => {
  const presenterProps = useAreaSelectField()
  return <Presenter.AreaSelectField {...presenterProps} />
}
