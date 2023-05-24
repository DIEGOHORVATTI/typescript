import '../global'
import { Body, Title } from '../function'

Title('exemplo de generic classes')

class Estudante<T, U> {
  private nome: T
  private idade: U

  setValor(id: T, nome: U): void {
    this.id = id
    this.nome = nome
  }

  retornarValor(): void {
    Body(`O nome é ${this.id} e a idade é ${this.nome}`)
  }
}

const estudante = new Estudante<string, number>()
const estudanteSecundario = new Estudante<string, string>()

estudante.setValor('João', 20)

estudanteSecundario.setValor('Maria', '20')
estudanteSecundario.retornarValor()
