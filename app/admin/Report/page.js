import { Typography } from '@mui/material'
import { getUserData } from '../../lib/user/data'
import Page from '../../ui/page'
import SimpleTable from '../../ui/user/simpletable'
import { getProjectData } from '../../lib/project/data'
import OneColumnTable from '../../ui/forms/project/onecolumn'

const ReportPage = async () => {
  const users = await getUserData()
  const projects = await getProjectData()

  return (
    <div>
      <Page title={'Relatórios'}>
        <Typography variant="h4">Pesquisa por colaboradores</Typography>
        <SimpleTable rows={users} />
        <OneColumnTable rows={projects} />
      </Page>
    </div>
  )
}

export default ReportPage
