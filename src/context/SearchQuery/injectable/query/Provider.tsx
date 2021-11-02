import { ReactNode, VFC } from 'react'
import { Provider } from '../Provider'
import { useSearchQueryCore } from './useSearchQueryCore'

export const SearchQueryProvider: VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const injectValue = useSearchQueryCore()
  return <Provider injectValue={injectValue}>{children}</Provider>
}
