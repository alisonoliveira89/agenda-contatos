import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis, { devices } from '../../styles/variaveis'

type Props = {
  formulario: boolean
}

export const Aside = styled.aside<Props>`
  margin-left: 16px;
  background-color: ${variaveis.cinza};
  height: 100vh;
  overflow-y: scroll;

  @media ${devices.md} {
    margin: 0;
    height: ${(props) => (props.formulario ? '15vh' : '40vh')};
  }
`

export const Contatos = styled.div`
  display: grid;
  margin-top: 16px;
`

export const Busca = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`

export const Campo = styled.input`
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinzaEscuro};
  border-color: ${variaveis.cinzaEscuro};
`

export const Adicionar = styled(Link)`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
export const Texto = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding: 16px;
  margin-top: 32px;
  margin-left: 8px;
  background-color: ${variaveis.azulClaro};
  color: ${variaveis.cinzaEscuro};
`
