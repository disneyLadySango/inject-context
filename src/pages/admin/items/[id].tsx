import { VFC } from 'react'
import { GetServerSidePropsContext } from 'next'

import { ItemFormPage } from '@/components/ItemFormPage'
import { ItemFormProvider } from 'src/context/ItemForm'
import { ItemResponse } from '@/types/item'

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { resolvedUrl, req } = context
  const result = await fetch(`http://${req.headers.host}/api/${resolvedUrl}`)
  if (result.status !== 200) {
    return {
      notFound: true,
    }
  }

  const data = await result.json()
  return {
    props: { data },
  }
}

const AdminItemPage: VFC<{ data: ItemResponse }> = (props) => {
  return (
    <ItemFormProvider {...props}>
      <ItemFormPage />
    </ItemFormProvider>
  )
}
export default AdminItemPage
