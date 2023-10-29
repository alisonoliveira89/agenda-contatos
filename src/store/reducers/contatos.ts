import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
  termo?: string
}

const initialState: ContatosState = {
  termo: '',
  itens: [
    {
      id: 1,
      nome: 'Alison Oliveira',
      telefone: '11995168467',
      email: 'alison.oliveira@teste.com.br'
    },
    {
      id: 2,
      nome: 'Linus Torvalds',
      telefone: '11912349876',
      email: 'linus.torvalds@teste.com.br'
    },
    {
      id: 3,
      nome: 'Dan Abramov',
      telefone: '11998761234',
      email: 'dan.abramov@teste.com.br'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    filtrar: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const telefoneExiste = state.itens.find(
        (contato) =>
          contato.telefone.toLowerCase() ===
          action.payload.telefone.toLowerCase()
      )
      if (telefoneExiste) {
        alert(
          'Já existe um contato (' +
            telefoneExiste.nome +
            ') com esse número de telefone'
        )
      } else {
        const maxId = state.itens[state.itens.length - 1]
        console.log('maxId ' + maxId)
        const novoContato = {
          ...action.payload,
          id: maxId ? maxId.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { filtrar, remover, adicionar, editar } = contatoSlice.actions

export default contatoSlice.reducer
