import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import Avatar from '../../assets/images/Avatar-max.png'
import Edit from '../../assets/images/edit.svg'
import Phone from '../../assets/images/phone.svg'
import Mail from '../../assets/images/mail.svg'
import Trash from '../../assets/images/trash.svg'
import { RootReducer } from '../../store'

import { remover } from '../../store/reducers/contatos'
import { selecionar } from '../../store/reducers/detalhes'

type Props = {
  estaSelecionado: boolean
}

const DetalheCard = ({ estaSelecionado }: Props) => {
  const dispatch = useDispatch()

  //Outra forma de desestruturar, aí usa detalhes.id, detalhes.nome etc...
  //const { detalhes } = useSelector((state: RootReducer) => state)
  const { id, nome, email, telefone } = useSelector(
    (state: RootReducer) => state.detalhes
  )

  const removerContato = () => {
    dispatch(selecionar({ id: 0, nome: '', email: '', telefone: '' }))
    dispatch(remover(id))
  }

  estaSelecionado = nome.length > 0

  return (
    <>
      {estaSelecionado ? (
        <>
          <S.Card>
            <S.Imagem imgMaior src={Avatar} alt="imagem de contato" />
            <S.Texto textoMaior>{nome}</S.Texto>
            <S.Imagem imgMaior={false} src={Phone} alt="icone de telefone" />
            <S.Texto textoMaior={false}>{telefone}</S.Texto>
            <S.Imagem imgMaior={false} src={Mail} alt="icone de email" />
            <S.Texto textoMaior={false}>{email}</S.Texto>
          </S.Card>
          <S.EditRemove>
            <S.Imagem
              imgMaior={false}
              src={Edit}
              botao
              alt="icone de edição"
              title="Editar contato"
            />
            <S.Imagem
              imgMaior={false}
              remove
              botao
              src={Trash}
              onClick={removerContato}
              alt="icone de exclusão"
              title="Excluir contato"
            />
          </S.EditRemove>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default DetalheCard
