'use client'
import { Button, TextField, Collapse, Alert, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { handleCredentialLogin } from '../../lib/action'
import { useFormState } from 'react-dom'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function LoginCredentialForm() {
  const [state, formLoginCredentialAction] = useFormState(
    handleCredentialLogin,
    undefined
  )

  const [openAlert, setOpenAlert] = React.useState(false)
  const router = useRouter()

  useEffect(() => {
    if (state?.message) {
      setOpenAlert(true)
    }
  }, [state])

  const handleCloseAlert = () => {
    setOpenAlert(false)
    if (state?.type === 'success') router.push('/') // Redireciona para a página de login
  }
  return (
    <div>
      <form action={formLoginCredentialAction}>
        <TextField
          label="E-mail"
          name="email"
          variant="outlined"
          fullWidth
          required
          sx={{ marginTop: 8 }}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <Button
          sx={{ marginTop: 3, marginBottom: 3 }}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          Entrar
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
    </div>
  )
}

export default LoginCredentialForm
