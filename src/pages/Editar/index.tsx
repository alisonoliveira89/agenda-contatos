import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Formulario from '../../containers/Formulario'
import ListaDeContatos from '../../containers/ListaDeContatos'
import { RootReducer } from '../../store'

const Editar = () => {
  const { id } = useSelector((state: RootReducer) => state.detalhes)

  const detalhesPreenchido = () => {
    return id
  }

  return (
    <>
      {detalhesPreenchido() > 0 ? (
        <>
          <ListaDeContatos mostraContatos={false} edicao />
          <Formulario edicao />
        </>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  )
}
export default Editar
