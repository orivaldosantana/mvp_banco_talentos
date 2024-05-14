import { getUserData } from '../../lib/user/data'

const ReportPage = async () => {
  const users = await getUserData()
  console.log(users)
  return (
    <div>
      <h1> Relatórios </h1>
    </div>
  )
}

export default ReportPage
