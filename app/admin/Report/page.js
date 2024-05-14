import { getUserData } from '../../lib/user/data'
import Page from '../../ui/page'
import SimpleTable from '../../ui/user/simpletable'

const ReportPage = async () => {
  const users = await getUserData()
  return (
    <div>
      <Page title={'Relatórios'}>
        <SimpleTable rows={users} />
      </Page>
    </div>
  )
}

export default ReportPage
