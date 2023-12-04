import styles from './page.module.css'
import Professional from './ui/forms/professional'

export default function Home() {
  return (
    <div className={styles.main}>
      <Professional title="Cadastro" />
    </div>
  )
}
