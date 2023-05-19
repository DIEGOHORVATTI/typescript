import '../global'
import { Body, Title } from '../function'

const retornarElementosRandomicos = <T>(items: T[]): T => {
  const itemRandomico = Math.floor(Math.random() * items.length)
  return items[itemRandomico]
}

const numeros = [1, 2, 3, 4, 5]
const estados = ['SP', 'RJ', 'MG', 'BA', 'RS']

const numerosRandomicos = retornarElementosRandomicos<number>(numeros)
const estadosRandomicos = retornarElementosRandomicos<string>(estados)

Body(numerosRandomicos)
Body(estadosRandomicos)
