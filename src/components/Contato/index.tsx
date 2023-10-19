import * as S from './styles'
import Avatar from '../../assets/images/Avatar-min.png'

type Props = {
  nome: string
  telefone?: string
  email?: string
}

const Contato = ({ nome }: Props) => {
  const Clicar = () => {
    console.log('click')
  }

  const estaSelecionado = () => {
    const mesmoNome = nome === 'Alison Oliveira'

    return mesmoNome
  }

  const selecionado = estaSelecionado()

  return (
    <S.Card selecionado={selecionado} onClick={Clicar}>
      <S.Avatar src={Avatar} />
      <S.Contact>{nome}</S.Contact>
    </S.Card>
  )
}

export default Contato
