import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

function Professional({ title }) {
  const textFieldBackground = '#FAFAFA'
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h4" sx={{ color: '#3030a1', margin: 3 }}>
          Cadastro de Colaboradores
        </Typography>

        <form>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
          />
          <TextField
            label="Telefone"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
          />
          <TextField
            label="E-mail"
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
