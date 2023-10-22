import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import detalhesReducer from './reducers/detalhes'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    detalhes: detalhesReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
