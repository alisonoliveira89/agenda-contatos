import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import Avatar from '../../assets/images/Avatar-min.png'
import ContatoClass from '../../models/Contato'
import { selecionar } from '../../store/reducers/detalhes'
import { RootReducer } from '../../store'

type Props = ContatoClass

const Contato = ({ id, email, nome, telefone }: Props) => {
  const dispatch = useDispatch()
  const { detalhes } = useSelector((state: RootReducer) => state)

  const clicar = () => {
    dispatch(selecionar({ id, nome, email, telefone }))
  }

  const estaSelecionado = () => {
    const mesmoId = detalhes.id == id

    return mesmoId
  }

  const selecionado = estaSelecionado()

  return (
    <S.Card selecionado={selecionado} onClick={clicar}>
      <S.Avatar src={Avatar} />
      <S.Contact>{nome}</S.Contact>
    </S.Card>
  )
}

export default Contato
