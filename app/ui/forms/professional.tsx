import { Container } from '@mui/material'
import React from 'react'
 

function Professional({ title }) {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h2>{title}</h2>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o nome"
          required
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="Digite o telefone"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite o e-mail"
          required
        />
        <label htmlFor="experiencia">Experiência Profissional:</label>
        <textarea id="experiencia" name="experiencia" required></textarea>

        <label htmlFor="conhecimentos">Conhecimentos Prévios:</label>
        <textarea id="conhecimentos" name="conhecimentos" required></textarea>

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  )
}

export default Professional
