import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  margin-top: 32px;
  margin-left: 32px;
  align-items: center;
`
export const EditRemove = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 8px;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  align-items: center;
  border-top: 2px solid #bddeff;
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
`

export const Editar = styled(Link)`
  align-self: center;
  justify-self: center;
`

export const Texto = styled.p<Props>`
  margin-top: 16px;
  color: #fff;
  font-size: ${(props) => (props.textoMaior ? '32px' : '20px')};
`
