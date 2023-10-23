import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import Avatar from '../../assets/images/Avatar-max.png'
import Phone from '../../assets/images/phone.svg'
import Mail from '../../assets/images/mail.svg'

import { adicionar, editar } from '../../store/reducers/contatos'
import { selecionar } from '../../store/reducers/detalhes'

import { RootReducer } from '../../store'

type Props = {
  edicao: boolean
}

const Formulario = ({ edicao }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    id,
    nome: nomeOrig,
    telefone: telOrig,
    email: emailOrig
  } = useSelector((state: RootReducer) => state.detalhes)

  const [nome, setNome] = useState(
    nomeOrig.length > 0 && edicao ? nomeOrig : ''
  )
  const [telefone, setTelefone] = useState(
    telOrig.length > 0 && edicao ? telOrig : ''
  )
  const [email, setEmail] = useState(
    emailOrig.length > 0 && edicao ? emailOrig : ''
  )

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  const editarContato = (evento: FormEvent) => {
    evento.preventDefault()

    console.log('id edicao: ' + id)

    dispatch(
      editar({
        id,
        nome,
        telefone,
        email
      })
    )
    dispatch(
      selecionar({
        id,
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.Container>
      <form onSubmit={edicao ? editarContato : adicionarContato}>
        <S.Card>
          <S.Imagem imgMaior src={Avatar} alt="imagem de contato" />
          <S.Campo
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome"
            textoMaior
            required
          ></S.Campo>
          <S.Imagem imgMaior={false} src={Phone} alt="icone de telefone" />
          <S.Campo
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            type="tel"
            placeholder="Telefone"
            textoMaior={false}
            required
          ></S.Campo>
          <S.Imagem imgMaior={false} src={Mail} alt="icone de email" />
          <S.Campo
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            placeholder="E-mail"
            textoMaior={false}
          ></S.Campo>
        </S.Card>
        <S.CancelSalvar>
          <S.Botao remove onClick={() => navigate('/')}>
            Cancelar
          </S.Botao>
          <S.Botao type="submit">Salvar</S.Botao>
        </S.CancelSalvar>
      </form>
    </S.Container>
  )
}

export default Formulario
