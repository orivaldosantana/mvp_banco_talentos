'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { getManyUser } from '../../lib/user/action'
import { Box, Button, TextField } from '@mui/material'
import SimpleTable from './simpletable'

const initalSate = {
  message: '',
  type: '',
  users: []
}

function SearchButton() {
  const { panding } = useFormStatus()

  return (
    <button type="submit" disabled={panding}>
      Buscar
    </button>
  )
}

export default function SearchGroup() {
  const textFieldBackground = '#FAFAFA'
  const [state, formSearchAction] = useFormState(getManyUser, initalSate)
  console.log('state is', state)
  return (
    <>
      <form action={formSearchAction}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 4
          }}
        >
          <TextField
            label="Nome"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginRight: 2,
              backgroundColor: textFieldBackground
            }}
          />
          <Button variant="contained" type="submit">
            Buscar
          </Button>
        </Box>
      </form>
      {state.users && <SimpleTable rows={state.users} />}
    </>
  )
}
