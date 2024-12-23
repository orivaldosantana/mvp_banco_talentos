import { Typography } from '@mui/material'
import { getAllUser } from '../../lib/user/data'
import Page from '../../ui/page'
import SimpleTable from '../../ui/user/simpletable'
import { getProjectData } from '../../lib/project/data'
import OneColumnTable from '../../ui/forms/project/onecolumn'
import SearchGroup from '../../ui/user/searchgroup'

const ReportPage = async () => {
  const users = await getAllUser()
  const projects = await getProjectData()

  return (
    <div>
      <Page title={'Relatórios'}>
        <Typography variant="h4">Pesquisa por colaboradores</Typography>
        <SimpleTable rows={users} />
        <OneColumnTable rows={projects} />
        <SearchGroup />
      </Page>
    </div>
  )
}

export default ReportPage
