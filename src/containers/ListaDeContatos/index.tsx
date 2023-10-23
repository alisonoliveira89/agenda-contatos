import { useDispatch, useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import * as S from './styles'

import Plus from '../../assets/images/plus.svg'

import { RootReducer } from '../../store'

import { filtrar } from '../../store/reducers/contatos'
import { selecionar } from '../../store/reducers/detalhes'

type Props = {
  mostraContatos: boolean
  edicao: boolean
}

const ListaDeContatos = ({ mostraContatos, edicao }: Props) => {
  const dispatch = useDispatch()
  const { itens, termo } = useSelector((state: RootReducer) => state.contatos)

  const campoBusca = () => {
    dispatch(selecionar({ id: 0, nome: '', email: '', telefone: '' }))
  }

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const listaContatos = filtraContatos()

  return (
    <S.Aside>
      {mostraContatos ? (
        <>
          <S.Busca>
            <S.Campo
              type="text"
              placeholder="buscar"
              value={termo}
              onClick={campoBusca}
              onChange={(evento) => dispatch(filtrar(evento.target.value))}
            ></S.Campo>
            <S.Adicionar to="/novo">
              <img src={Plus} alt="icone adicionar" title="Adicionar contato" />
            </S.Adicionar>
          </S.Busca>
          <main>
            <ul>
              {listaContatos.map((c) => (
                <li key={c.nome}>
                  <Contato
                    id={c.id}
                    nome={c.nome}
                    email={c.email}
                    telefone={c.telefone}
                  />
                </li>
              ))}
            </ul>
          </main>
        </>
      ) : (
        <>
          {edicao ? (
            <S.Texto>Edição de contato</S.Texto>
          ) : (
            <S.Texto>Adicionar novo contato</S.Texto>
          )}
        </>
      )}
    </S.Aside>
  )
}

export default ListaDeContatos
