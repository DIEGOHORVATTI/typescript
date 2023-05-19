import '../global'
import { Body, Title } from '../function'

Title('Usso de restrição em generics com extends')

const juntarObjetos = <U extends object, V extends object>(
  objeto1: U,
  objeto: V
) => {
  return { ...objeto1, ...objeto }
}

const pessoa = juntarObjetos({ nome: 'João' }, { idade: 20 })
Body(pessoa)
