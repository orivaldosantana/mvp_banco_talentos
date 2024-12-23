import { Box, Button, Paper, Typography, TextField } from '@mui/material'

function Register() {
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
        <form>
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
        </form>
        <Button
          sx={{ marginTop: 4, marginBottom: 4 }}
          fullWidth
          variant="contained"
          color="primary"
          href="/contract/all"
        >
          Cadastrar
        </Button>
      </Paper>
    </Box>
  )
}

export default Register
