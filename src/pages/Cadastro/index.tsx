import Formulario from '../../containers/Formulario'
import ListaDeContatos from '../../containers/ListaDeContatos'

type Props = {
  edicao: boolean
}

const Cadastro = ({ edicao }: Props) => {
  return (
    <>
      <ListaDeContatos mostraContatos={false} edicao={false} />
      <Formulario edicao={edicao} />
    </>
  )
}
export default Cadastro
