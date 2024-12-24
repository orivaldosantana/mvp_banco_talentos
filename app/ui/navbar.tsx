import React from 'react'
import Link from 'next/link'

import ArticleOutlined from '@mui/icons-material/ArticleOutlined'
import { ContentPasteSearch } from '@mui/icons-material'
import { Dashboard } from '@mui/icons-material'
import { People } from '@mui/icons-material'
import { Button } from '@mui/material'

import styles from '../page.module.css'
import { handleGitHubLogout } from '../lib/action'
import { auth } from '../lib/auth'

const NavBar = async () => {
  const session = await auth()
  console.log(session)
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
        <form action={handleGitHubLogout}>
          <Button
            sx={{ marginTop: 4 }}
            fullWidth
            variant="outlined"
            color="primary"
            type="submit"
          >
            Sair
          </Button>
        </form>
      </nav>
    </div>
  )
}

export default NavBar
