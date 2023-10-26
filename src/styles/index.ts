import styled, { createGlobalStyle } from 'styled-components'
import { devices } from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 332px auto;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media ${devices.md} {
    display: block;
  }
`

export default EstiloGlobal
