import { BorderBottom } from '@mui/icons-material'
import Box from '@mui/material/Box'
import React from 'react'

export default function Header() {
  return (
    <header>
      <Box sx={{ borderBottom: 2, borderBottomColor: '#bec9f2'}}> 
      <h1>MVP Banco de Talentos</h1>
      </Box>
    </header>
  )
}
