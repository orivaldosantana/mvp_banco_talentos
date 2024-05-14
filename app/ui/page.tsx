import { Box, Container, Typography } from '@mui/material'

function GenericPage({ title, children }) {
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
        <Typography variant="h3" sx={{ color: '#3030a1', margin: 5 }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  )
}

export default GenericPage
