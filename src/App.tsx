import React from 'react'
import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './containers/ListaDeContatos'
import Detalhes from './containers/Detalhes'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
        <Detalhes />
      </Container>
    </Provider>
  )
}

export default App
