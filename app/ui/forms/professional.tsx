'use client'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { addUser } from '../../lib/user/action'
import { useActionState } from 'react'

const initialState = {
  message: ''
}

function Professional({ title }) {
  const [state, formAddUserAction] = useActionState(addUser, initialState)

  const textFieldBackground = '#FAFAFA'
  console.log('Professional')
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

        <form action={formAddUserAction}>
          <TextField
            label="Nome"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
          />
          <TextField
            label="Telefone"
            name="cellphone"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
          />
          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Cadastrar
          </Button>
          <p> {state?.message} </p>
        </form>
      </Box>
    </Container>
  )
}

export default Professional
