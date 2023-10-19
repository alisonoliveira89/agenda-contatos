import * as S from './styles'

import Avatar from '../../assets/images/Avatar-max.png'
// import Edit from '../../assets/images/edit.svg'
import Phone from '../../assets/images/phone.svg'
import Mail from '../../assets/images/mail.svg'

const DetalheCard = () => {
  return (
    <>
      <S.Card>
        <S.Imagem imgMaior src={Avatar} alt="imagem de contato" />
        <S.Texto textoMaior>Alison Oliveira</S.Texto>
        <S.Imagem imgMaior={false} src={Phone} alt="icone de telefone" />
        <S.Texto textoMaior={false}>11 99413-8657</S.Texto>
        <S.Imagem imgMaior={false} src={Mail} alt="icone de email" />
        <S.Texto textoMaior={false}>alison.oliveira@12345678.com.br</S.Texto>
      </S.Card>
    </>
  )
}

export default DetalheCard
