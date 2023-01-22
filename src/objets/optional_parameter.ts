import '../global'
import { Body, Title } from '../function'

Title('Optional parameter')
function soma(num1: number, num2: number, num3?: number): number {
  return num1 + num2 + (num3 || 0)
}
Body(soma(2, 4))
Body(soma(2, 4, 6))

Title('Optional parameter')
function exemplo_2(mensage: string, idUser?: number): void {
  const horalog = new Date().toLocaleDateString()
  Body(horalog, mensage, idUser)
}
exemplo_2('Ola', 4)

Title('Optional parameter')
type pessoa = {
  nome: string
  cargo: string
  birth: string
  idade?: number
}
const Pessoa: pessoa = {
  nome: 'Diego',
  cargo: 'Dev',
  birth: '10/10/1990',
  idade: 25
}
Body(Pessoa)
