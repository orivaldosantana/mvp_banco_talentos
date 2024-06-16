'use client'
import {
  Alert,
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect } from 'react'
import { addUser } from '../../lib/user/action'
import { useFormState } from 'react-dom'
import { Close } from '@mui/icons-material'

const initialState = {
  message: ''
}

function Professional({ title }) {
  const [state, formAddUserAction] = useFormState(addUser, initialState)
  const [openAlert, setOpenAlert] = React.useState(true)
  useEffect(() => {
    if (state?.message) {
      setOpenAlert(true)
    }
  }, [state])

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
            sx={{ marginTop: 2, marginBottom: 4 }}
          >
            Cadastrar
          </Button>

          <Collapse in={openAlert}>
            <Alert
              severity={state?.type}
              variant="filled"
              action={
                <IconButton size="small" onClick={() => setOpenAlert(false)}>
                  <Close />
                </IconButton>
              }
            >
              {state?.message}
            </Alert>
          </Collapse>
        </form>
      </Box>
    </Container>
  )
}

export default Professional
