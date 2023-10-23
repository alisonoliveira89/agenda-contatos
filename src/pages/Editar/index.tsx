import Formulario from '../../containers/Formulario'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Editar = () => {
  return (
    <>
      <ListaDeContatos mostraContatos={false} edicao />
      <Formulario edicao />
    </>
  )
}
export default Editar
