import './global'
import { Body, Title } from '../function'

Title('Type Never')
function error_1(mensage: string): never {
  throw new Error(mensage)
}
// Body(error_1('Erro: 3232212'))

Title('Type Never inferido automáticamente')
function error_2() {
  return error_1('Erro: 3232212')
}
// Body(error_2())

Title('Função que contém loop infinito retorna tipo never')

const loopInfinito = () => {
  while (true) {
    Body('Loop')
  }
}
// Body(loopInfinito())

Title('Diferenças do null e never')
const valorVoid: void = null
const valorNever: never = null

Body(valorVoid)
Body(valorNever)
