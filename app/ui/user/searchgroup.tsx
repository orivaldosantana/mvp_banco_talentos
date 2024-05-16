'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { getManyUser } from '../../lib/user/action'

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
  const [state, formSearchAction] = useActionState(getManyUser, initalSate)
  console.log('state is', state)
  return (
    <form action={formSearchAction}>
      <input type="text" name="name" placeholder="Nome" />
      <SearchButton />

      {state.users && state.users.map((u: any) => <p key={u.id}> {u.name} </p>)}
    </form>
  )
}
