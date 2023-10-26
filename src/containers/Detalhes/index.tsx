import DetalheCard from '../../components/DetalheCard'
import { Container, Titulo } from './styles'

const Detalhes = () => {
  return (
    <Container>
      <Titulo>Detalhes</Titulo>
      <DetalheCard estaSelecionado={false} />
    </Container>
  )
}

export default Detalhes
