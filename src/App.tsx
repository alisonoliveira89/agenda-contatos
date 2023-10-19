import React from 'react'

import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './containers/ListaDeContatos'
import Detalhes from './containers/Detalhes'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
        <Detalhes />
      </Container>
    </>
  )
}

export default App
