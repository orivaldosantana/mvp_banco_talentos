import React from 'react'
import Link from 'next/link'

import { AiOutlineFileDone } from 'react-icons/ai'

import styles from '../../page.module.css'

function NavBar() {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/">
          <AiOutlineFileDone /> <p> Cadastro</p>
        </Link>
        <Link href="/">Consulta</Link>
      </nav>
    </div>
  )
}

export default NavBar
