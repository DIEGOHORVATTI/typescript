import '../global'
import { Body, Title } from '../function'

Title('Função normal')
function soma(num1: number, num2: number) {
  return num1 + num2
}
Body(soma(2, 4))

Title('Função anônima (function expression)')
function saudar_1(mensage: string) {
  return mensage
}
Body(saudar_1('Saudadr pessoas'))

Title('Função arrow function expression')
const saudar_2 = (mensage: string) => {
  return mensage
}
Body(saudar_2('Fala my pov'))

Title('Função arrow function expression')
const saudar_3 = new Function('mensagem', 'return "fala " + mensagem')
Body(saudar_3('Tudo bem'))
