import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis, { devices } from '../../styles/variaveis'

type Props = {
  textoMaior?: boolean
  imgMaior?: boolean
  remove?: boolean
  botao?: boolean
}

export const Card = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 8px;
  margin-top: 8px;
  margin-left: 32px;
  align-items: center;

  @media ${devices.md} {
    margin-left: 8px;
    margin-right: 8px;
    border-top: 1px solid ${variaveis.azulClaro};
    grid-template-columns: 90px auto;
  }
`
export const EditRemove = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 8px;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  align-items: center;
  border-top: 2px solid ${variaveis.azulClaro};

  @media ${devices.md} {
    margin-left: 8px;
    margin-right: 8px;
    border-top: 1px solid ${variaveis.azulClaro};
    grid-template-columns: 90px auto;
  }
`

export const Imagem = styled.img<Props>`
  margin-top: 16px;
  height: ${(props) => (props.imgMaior ? '90px' : '34px')};
  width: ${(props) => (props.imgMaior ? '90px' : '34px')};
  align-self: ${(props) => (props.remove ? 'left' : 'center')};
  justify-self: ${(props) => (props.remove ? 'left' : 'center')};
  ${(props) => (props.botao ? 'cursor: pointer' : '')};
  &:hover {
    transform: ${(props) => (props.botao ? 'scale(1.2)' : 'scale(1)')};
  }

  @media ${devices.md} {
    height: ${(props) => (props.imgMaior ? '60px' : '27px')};
    width: ${(props) => (props.imgMaior ? '60px' : '27px')};
  }
`

export const Editar = styled(Link)`
  align-self: center;
  justify-self: center;
`

export const Texto = styled.p<Props>`
  margin-top: 16px;
  color: ${variaveis.branco};
  font-size: ${(props) => (props.textoMaior ? '32px' : '20px')};

  @media ${devices.md} {
    font-size: ${(props) => (props.textoMaior ? '20px' : '16px')};
  }
`

export const SubTitulo = styled.h3`
  margin-top: 64px;
  margin-left: 32px;
  color: ${variaveis.azulClaro};

  @media ${devices.md} {
    font-size: 16px;
    text-align: center;
    margin-right: 32px;
  }
`
