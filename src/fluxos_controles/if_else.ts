import '../global'
import { Body, Title } from '../function'

type pessoa = {
  nome: string
  idade: number
}

const pessoa_1: pessoa = {
  nome: 'Diego',
  idade: 20
}

const pessoa_2: pessoa = {
  nome: 'Diogo',
  idade: 17
}

Title('Exemplo Ternario')
function verificaIdade_1(nome: string, idade: number): void {
  return idade < 18
    ? Body(`${nome} é menor de idade`)
    : Body(`${nome} é maior de idade`)
}
verificaIdade_1(pessoa_1.nome, pessoa_1.idade)
verificaIdade_1(pessoa_2.nome, pessoa_2.idade)

function verificaIdade_2(nome: string, idade: number): void {
  if (idade < 18) {
    Body(`${nome} é menor de idade`)
  } else if (idade == 20) {
    Body(`${nome} tem 20`)
  } else {
    Body(`${nome} é maior de idade`)
  }
}
verificaIdade_2(pessoa_2.nome, pessoa_2.idade)
