import styled from 'styled-components'

type Props = {
  textoMaior?: boolean
  imgMaior?: boolean
}

export const Card = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 8px;
  margin-top: 32px;
  margin-left: 32px;
  align-items: center;
`
export const Imagem = styled.img<Props>`
  height: ${(props) => (props.imgMaior ? '90px' : '34px')};
  width: ${(props) => (props.imgMaior ? '90px' : '34px')};
  align-self: center;
  justify-self: center;
`
export const Texto = styled.p<Props>`
  color: #fff;
  font-size: ${(props) => (props.textoMaior ? '32px' : '20px')};
`
