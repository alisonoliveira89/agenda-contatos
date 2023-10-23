import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Aside = styled.aside`
  margin: 0 0 16px 16px;
  background-color: #eee;
  height: 100vh;
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
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
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
  background-color: #bddeff;
  color: #666666;
`
