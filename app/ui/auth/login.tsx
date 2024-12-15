import { Box, Button, Paper, Typography, TextField } from '@mui/material'

function Login() {
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
        <Typography variant="h4" sx={{  marginTop: 6 }}>MVP Banco de Talentos</Typography>
        <form>
          <TextField
            label="Usuário"
            name="user"
            variant="outlined"
            fullWidth
            required
            sx={{  marginTop: 8 }}
          />
          <TextField
            label="Senha"
            name="password"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
        </form>
        <Button
          sx={{ marginTop: 4, marginBottom: 4 }}
          fullWidth
          variant="contained"
          color="primary"
          href="/contract/all"
        >
          Iniciar
        </Button>
      </Paper>
    </Box>
  )
}

export default Login
