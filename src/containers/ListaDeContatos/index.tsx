import Contato from '../../components/Contato'
import * as S from './styles'

import Plus from '../../assets/images/plus.svg'

const contatos = [
  {
    nome: 'Alison Oliveira',
    telefone: '11994138657',
    email: 'alison.oliveira@teste.com.br'
  },
  {
    nome: 'Linus Torvalds',
    telefone: '11912349876',
    email: 'linus.torvalds@teste.com.br'
  },
  {
    nome: 'Dan Abramov',
    telefone: '11998761234',
    email: 'dan.abramov@teste.com.br'
  }
]

const ListaDeContatos = () => {
  const BtnPlus = () => {
    console.log('Btn Plus')
  }
  return (
    <S.Aside>
      <S.Campo type="text" placeholder="buscar"></S.Campo>
      <a onClick={BtnPlus}>
        <img src={Plus} alt="" />
      </a>
      {/* <button type="submit">Adicionar</button> */}
      <main>
        <ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contato nome={c.nome} />
            </li>
          ))}
        </ul>
      </main>
    </S.Aside>
  )
}

export default ListaDeContatos
