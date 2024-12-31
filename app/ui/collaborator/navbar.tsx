import React from 'react'
import Link from 'next/link'

import ArticleOutlined from '@mui/icons-material/ArticleOutlined'

import { People } from '@mui/icons-material'
import { Button } from '@mui/material'

import styles from '../../page.module.css'
import { handleGitHubLogout } from '../../lib/action'

const NavBar = async () => {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/collaborator/data">
          <People /> Dados
        </Link>
        <Link href="/collaborator/project">
          <ArticleOutlined /> Projetos
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
