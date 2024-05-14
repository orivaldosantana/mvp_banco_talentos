import { getUserData } from '../../lib/user/data'
import Page from '../../ui/page'

const ReportPage = async () => {
  const users = await getUserData()
  console.log(users)
  return (
    <div>
      <Page title={'Relatórios'}>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </Page>
    </div>
  )
}

export default ReportPage
