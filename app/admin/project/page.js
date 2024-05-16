// https://github.com/vercel/next.js/blob/canary/examples/next-forms/app/actions.ts
import FormProject from '../../ui/forms/project'
import Page from '../../ui/page'
export default function ProjectPage() {
  return (
    <div>
      <Page title={'Cadastro de Projeto'}>
        <FormProject />
      </Page>
    </div>
  )
}
