import styled from 'styled-components'

type Props = {
  textoMaior?: boolean
  imgMaior?: boolean
  remove?: boolean
}

export const Container = styled.main`
  background-color: #74b9ff;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 8px;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  align-items: center;
`
export const CancelSalvar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
`

export const Botao = styled.button<Props>`
  margin-left: 32px;
  height: 50px;
  width: 20%;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.remove ? '#eb7777' : '#81d59a')};
    transition: 0.3s ease;
    opacity: 1;
    border: 2px solid #bddeff;
  }
`

export const Imagem = styled.img<Props>`
  margin-top: 16px;
  height: ${(props) => (props.imgMaior ? '90px' : '34px')};
  width: ${(props) => (props.imgMaior ? '90px' : '34px')};
  align-self: center;
  justify-self: center;
`
export const Campo = styled.input<Props>`
  margin-top: 16px;
  color: #fff;
  background-color: #74b9ff;
  border: none;
  border-bottom: 1px solid #bddeff;
  font-size: ${(props) => (props.textoMaior ? '32px' : '20px')};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fff;
    opacity: 0.7;
    font-size: 16px;
  }
`
