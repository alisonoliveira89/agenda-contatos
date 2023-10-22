import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DetalhesState = {
  id: number
  nome: string
  email: string
  telefone: string
}

const initialState: DetalhesState = {
  id: 0,
  nome: '',
  email: '',
  telefone: ''
}

const detalhesSlice = createSlice({
  name: 'detalhes',
  initialState,
  reducers: {
    selecionar: (state, action: PayloadAction<DetalhesState>) => {
      state.id = action.payload.id
      state.nome = action.payload.nome
      state.email = action.payload.email
      state.telefone = action.payload.telefone
    }
  }
})

export const { selecionar } = detalhesSlice.actions

export default detalhesSlice.reducer
