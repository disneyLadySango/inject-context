import { VFC } from 'react'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

import {
  SearchPage as SearchPageComponent,
  Props,
} from '@/components/SearchPage'
import { SearchQueryProvider } from 'src/context/SearchQuery'

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
  const router = useRouter()

  return (
    <SearchQueryProvider data={props.data}>
      <SearchPageComponent {...props} />
    </SearchQueryProvider>
  )
}
export default SearchPage
