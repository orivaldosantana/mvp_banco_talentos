import { Typography } from '@mui/material'
import { getUserData } from '../../lib/user/data'
import Page from '../../ui/page'
import SimpleTable from '../../ui/user/simpletable'

const ReportPage = async () => {
  const users = await getUserData()
  return (
    <div>
      <Page title={'Relatórios'}>
        <Typography variant="h4">Pesquisa por colaboradores</Typography>
        <SimpleTable rows={users} />
      </Page>
    </div>
  )
}

export default ReportPage
