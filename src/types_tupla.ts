import './global'
import { Body, Title } from './function'

Title('Tipando tupla simple')
const tuple_1: [string, number, string, number] = ['hello', 1, 'world', 2]
for (let i = 0; i < tuple_1.length; i++) {
  Body(tuple_1[i])
}

Title('Tipando tupla heterogênia com spread operador')
const tuple_2: [string, ...string[]] = ['hello_1', 'hello_2', 'hello_3']
Body(...tuple_2)

Title('Tipando tupla heterogênia com spread operador')
const tuple_3: [string, number, boolean, ...string[]] = [
  'hello_1',
  20,
  false,
  ...tuple_2
]
Body(...tuple_3)

Title('Uso de função com dupla')
function Pessoa_2(nomes: string[], idades: number[]) {
  return [...nomes, ...idades]
}
Body(Pessoa_2(['Diego', 'Horvatti', 'escorpição'], [20, 30]))

Title('Labeled tuples com spread operator numa função')
type Nome =
  | [primeiroNome: string, sobreNome: string]
  | [primerioNome: string, nomeMeio: string, sobreNome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}
Body(criarPessoa('Diego', 'solza', 'Horvatti'))

Title('Tipando tupla com labels')
const tuple_4: [
  nome: string,
  oculpacao: string,
  empresa: string,
  idade: number
] = ['Diego Horvatti', 'Estudante - Estágiario', 'Leadeasy', 20]
Body(tuple_4)
