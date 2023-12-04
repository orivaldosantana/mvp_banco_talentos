import styles from './page.module.css'
import Professional from './ui/forms/professional'

export default function Home() {
  return (
    <main className={styles.main}>
      <Professional title="Cadastro" />
    </main>
  )
}
