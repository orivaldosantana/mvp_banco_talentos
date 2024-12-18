// Layout padrão da aplicação
import './globals.css'

export const metadata = {
  title: 'MVP Banco de Talentos',
  description:
    'Sistema de cadastro de talentos para projetos de desenvolvimento de software'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div> {children} </div>
      </body>
    </html>
  )
}
