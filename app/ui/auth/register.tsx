'use client'
import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  Collapse,
  Alert,
  IconButton
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { addUser } from '../../lib/user/action'
import { useFormState } from 'react-dom'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Register() {
  const [state, formAddUserAction] = useFormState(addUser, undefined)
  const [openAlert, setOpenAlert] = React.useState(false)
  const router = useRouter()

  useEffect(() => {
    if (state?.message) {
      setOpenAlert(true)
    }
  }, [state])

  const handleCloseAlert = () => {
    setOpenAlert(false)
    router.push('/') // Redireciona para a página de login
  }

  return (
    <Box
      sx={{
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        elevation={7}
        sx={{
          padding: '30px',
          marginTop: '20px',
          width: '300px',
          textAlign: 'center',
          color: '#3030a1'
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 6 }}>
          MVP Banco de Talentos
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Cadastro de Usuário
        </Typography>
        <form action={formAddUserAction}>
          <TextField
            label="Nome"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{ marginTop: 8 }}
          />
          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            fullWidth
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label="Telefone"
            name="cellphone"
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
          />
          <TextField
            label="Senha"
            name="password"
            variant="outlined"
            fullWidth
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label="Repita a Senha"
            name="passwordRepeat"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <Button
            sx={{ marginTop: 4, marginBottom: 4 }}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
        <Collapse in={openAlert}>
          <Alert
            severity={state?.type}
            variant="filled"
            action={
              <IconButton size="small" onClick={handleCloseAlert}>
                <Close />
              </IconButton>
            }
          >
            {state?.message}
          </Alert>
        </Collapse>
      </Paper>
    </Box>
  )
}

export default Register
