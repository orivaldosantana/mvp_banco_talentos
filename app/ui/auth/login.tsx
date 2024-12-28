import { Box, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import { blueGrey } from '@mui/material/colors'
import LoginCredential from '../forms/login_credential'

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
        <LoginCredential />
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
