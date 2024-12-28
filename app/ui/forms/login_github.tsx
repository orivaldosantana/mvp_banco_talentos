'use client'
import { Button, Collapse, Alert, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { handleGitHubLogin } from '../../lib/action'
import { useFormState } from 'react-dom'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function LoginGithub() {
  const [state, formLoginGithubAction] = useFormState(
    handleGitHubLogin,
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
      <form action={formLoginGithubAction}>
        <Button
          sx={{ marginTop: 3, marginBottom: 4 }}
          fullWidth
          variant="outlined"
          color="primary"
          type="submit"
        >
          Entrar com GitHub
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
export default LoginGithub
