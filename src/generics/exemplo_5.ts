import '../global'
import { Body, Title } from '../function'

Title(
  'Extends ajuda a restringir o tipo de dado que pode ser passado por parametro'
)

const retornaObjeto = <T, K extends keyof T>(objeto: T, chave: K) => {
  return objeto[chave]
}

const objeto = retornaObjeto({ nome: 'João', idade: 20 }, 'nome')
Body(objeto)
