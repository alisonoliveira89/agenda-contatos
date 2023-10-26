import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  selecionado: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selecionado ? variaveis.azulClaro : variaveis.cinza};
`
export const Avatar = styled.img`
  height: 45px;
  width: 45px;
`
export const Contact = styled.p`
  margin-left: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${variaveis.cinzaEscuro};
`

//export const Ativo =
