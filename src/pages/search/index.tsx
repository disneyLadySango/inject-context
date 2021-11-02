import { VFC } from 'react'
import { GetServerSidePropsContext } from 'next'
import {
  SearchPage as SearchPageComponent,
  Props,
} from '@/components/SearchPage'

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { resolvedUrl, req } = context
  const result = await fetch(`http://${req.headers.host}/api/${resolvedUrl}`)
  const data = await result.json()
  return {
    props: { data },
  }
}

const SearchPage: VFC<Props> = (props) => {
  return <SearchPageComponent {...props} />
}
export default SearchPage
