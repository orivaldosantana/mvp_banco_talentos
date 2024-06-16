'use client'
import { Box, Button, TextField } from '@mui/material'

import { useState } from 'react'
import { useFormState } from 'react-dom'
import { addProject } from '../../lib/project/action'

const initialState = {
  message: '',
  type: ''
}

export default function FormProject() {
  const textFieldBackground = '#FAFAFA'
  const [state, formAddProjectAction] = useFormState(addProject, initialState)
  const [loading, setLoading] = useState(false)

  return (
    <Box>
      <form action={formAddProjectAction}>
        <TextField
          label="Título do Projeto"
          name="title"
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: 2, backgroundColor: textFieldBackground }}
        />
        <TextField
          label="Descrição"
          name="description"
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
      </form>
    </Box>
  )
}
