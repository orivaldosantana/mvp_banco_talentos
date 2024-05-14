import React from 'react'
import Link from 'next/link'

import ArticleOutlined from '@mui/icons-material/ArticleOutlined'
import { ContentPasteSearch } from '@mui/icons-material'
import { Dashboard } from '@mui/icons-material'
import { People } from '@mui/icons-material'

import styles from '../page.module.css'

function NavBar() {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/admin/collaborator">
           <People /> Colaboradores
        </Link>
        <Link href="/admin/project">
           <ArticleOutlined /> Projetos
        </Link>
        <Link href="/admin/report">
          <ContentPasteSearch /> Relatórios
        </Link>
        <Link href="/admin/dashboard">
          <Dashboard /> Painel 
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
