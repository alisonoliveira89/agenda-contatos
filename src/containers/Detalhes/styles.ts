import styled from 'styled-components'
import variaveis, { devices } from '../../styles/variaveis'

export const Container = styled.main`
  height: 100vh;
  background-color: ${variaveis.azulEscuro};
`

export const Titulo = styled.h1`
  margin-left: 32px;
  margin-top: 16px;
  color: ${variaveis.azulClaro};

  @media ${devices.md} {
    text-align: center;
    margin-top: 0;
    margin-right: 32px;
    padding-top: 16px;
    border-bottom: 2px solid ${variaveis.azulClaro};
  }
`
