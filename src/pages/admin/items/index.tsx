import { VFC } from 'react'
import { GetServerSidePropsContext } from 'next'

import { ItemsPage, Props } from '@/components/ItemsPage'

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

const AdminItemPage: VFC<Props> = (props) => {
  return <ItemsPage {...props} />
}
export default AdminItemPage
