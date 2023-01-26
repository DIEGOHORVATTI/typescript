import '../global'
import { Body, Title } from '../function'

Title('Interface exemplos - 1')
interface pessoa {
  nome: string
  sobreNome: string
  idade: number
  cpf?: number
}

function Pessoa(pessoa: pessoa): string {
  if (pessoa.cpf === undefined) {
    return `Nome: ${pessoa.nome} Sobre Nome: ${pessoa.sobreNome} Idade: ${pessoa.idade}`
  }
  return `Nome: ${pessoa.nome} Sobre Nome: ${pessoa.sobreNome} Idade: ${pessoa.idade} cpf: ${pessoa.cpf}`
}

const Diego = {
  nome: 'Diego',
  sobreNome: 'Horvatti',
  idade: 20,
  cpf: 17265342947
}
Body(Pessoa(Diego))

Title('Interface exemplos - 2')
interface pessoa_2 {
  nome: string
  sobreNome: string
  readonly idade: number
  cpf?: number
}

function Pessoa_2(pessoa: pessoa_2): string {
  if (pessoa.cpf === undefined) {
    return `Nome: ${pessoa.nome} Sobre Nome: ${pessoa.sobreNome} Idade: ${pessoa.idade}`
  }
  return `Nome: ${pessoa.nome} Sobre Nome: ${pessoa.sobreNome} Idade: ${pessoa.idade} cpf: ${pessoa.cpf}`
}

const Ana = {
  nome: 'Ana',
  sobreNome: 'Franca',
  idade: 19,
  cpf: 27364956
}
Body(Pessoa_2(Ana))

Title('Interface exemplos - 3')
interface Animal {
  nome: string
  vivo: boolean
  idadde: number
  comer(tipoComida: string): void
}

class Gato implements Animal {
  nome: string
  vivo: boolean
  idadde: number

  constructor(nome: string, vivo: boolean, idadde: number) {
    this.nome = nome
    this.vivo = vivo
    this.idadde = idadde
  }
  idade: number
  raca: string

  comer(tipoComida: string): void {
    console.log(`O gato está comendo ${tipoComida}`)
  }
}

const gato = new Gato('Gato', true, 5)
gato.comer('ração')
Body(gato)

Title('interface exemplos - 3')
interface cachorro {
  nome: string
  readonly idade: number
}

interface gato {
  raca: string
}

interface animal extends cachorro, gato {
  vivo: boolean
}

function Animal(animal: animal): string {
  return `Nome: ${animal.nome} Idade: ${animal.idade} raça: ${animal.raca} vivo: ${animal.vivo}`
}

Body(
  Animal({
    nome: 'Cachorro',
    idade: 5,
    vivo: true,
    raca: 'Vira-lata'
  })
)

Title('interface exemplos - 4')
interface Funcionario {
  id: number
  nome: string
  salario: number
}

/*  Omit<Funcionario, 'id' | 'nome'> */
interface Desenvolvidor extends Omit<Funcionario, 'id'> {
  tecnologias: string[]
}

const desenvolvidor: Desenvolvidor = {
  nome: 'Diego',
  salario: 1234.5,
  tecnologias: ['Javascript', 'Typescript']
}
Body(desenvolvidor)
