'use client'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Professional({ title }) {
  const textFieldBackground = '#FAFAFA'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name,
      phone,
      email
    }

    console.log(data)
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h4" sx={{ color: '#3030a1', margin: 5 }}>
          {title}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Telefone"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Cadastrar
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default Professional
