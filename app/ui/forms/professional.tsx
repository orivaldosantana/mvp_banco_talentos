import React from 'react'

import styles from '../../page.module.css'

function Professional({ title }) {
  return (
    <div >
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
    </div>
  )
}

export default Professional
