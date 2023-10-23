import Detalhes from '../../containers/Detalhes'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <ListaDeContatos mostraContatos edicao={false} />
    <Detalhes />
  </>
)

export default Home
