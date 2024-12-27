import { Box, Button, Paper, Typography, TextField } from '@mui/material'
import Link from 'next/link'
import { blueGrey } from '@mui/material/colors'
import { handleGitHubLogin } from '../../lib/action'
import { handleCredentialLogin } from '../../lib/action'

const Login = async () => {
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
        <form action={handleCredentialLogin}>
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
            sx={{ marginTop: 4 }}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <form action={handleGitHubLogin}>
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
        <Typography
          variant="body2"
          sx={{ color: blueGrey[300], marginBottom: 4 }}
        >
          Não tem uma conta?
          <Link href="/register">
            <strong> Registre-se </strong>
          </Link>
        </Typography>
      </Paper>
    </Box>
  )
}

export default Login
