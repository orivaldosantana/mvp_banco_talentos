import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { addUser } from '../../lib/user/action'

function Professional({ title }) {
  const textFieldBackground = '#FAFAFA'

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

        <form action={addUser}>
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
        </form>
      </Box>
    </Container>
  )
}

export default Professional
