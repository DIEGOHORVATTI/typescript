import './global'
import { Body, Title } from './function'

// oposto do any
// não retornara nem um  dado

Title('Tipo void')
function exemploVoid_1(): void {
  Body('Tipo retorno void função 1')
}
exemploVoid_1()

Title('Outra forma de tipar void')
const exemploVoid_2 = (): void => {
  Body('Tipo retorno void função 2')
}
exemploVoid_2()

Title('Não é preciso tipar o void se não tiver um return')
const exemploVoid_3 = () => {
  Body('Tipo retorno void função 3')
}
exemploVoid_3()

Title('Void em variaveis')
let variavel_1: void = undefined
//variavel_1 = 1
variavel_1 = null
variavel_1 = undefined

Body(variavel_1)
