import React from 'react'
import Link from 'next/link'

import { AiOutlineFileDone, AiOutlineFileSearch } from 'react-icons/ai'

import styles from '../../page.module.css'

function NavBar() {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/">
          <AiOutlineFileDone /> Cadastro
        </Link>
        <Link href="/">
          <AiOutlineFileSearch /> Consulta
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
