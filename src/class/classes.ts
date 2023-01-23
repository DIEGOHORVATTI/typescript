import '../global'
import { Body, Title } from '../function'

Title('Classes - exemplo 1')
class Pessoa {
  nome: string
  sobreNome: string

  constructor(nome: string, sobreNome: string) {
    this.nome = 'Diego'
    this.sobreNome = 'Horvatti'
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`
  }
}

const pessoa = new Pessoa('Diego', 'Horvatti')
Body(pessoa.nomeCompleto())

Title('Classes - exemplo 2 sem constructor')
class Estudante {
  codigoEstudante: number
  nomeEstudante: string
}
// criar objeto ou uma instancia
const estudante = new Estudante()
// inicializar o objeto
estudante.nomeEstudante = 'Diego'
estudante.codigoEstudante = 12345678
// acessar os campos
Body(`Nome do estudante.....: ${estudante.nomeEstudante}`)
Body(`Código do estudante...: ${estudante.codigoEstudante}`)

Title('Classes - exemplo 3 com constructor')
class Mercado {
  nomeMercado: string
  cnpj: number

  // Definir o COnstrutor
  constructor(nomeMercado: string, cnpj: number) {
    this.nomeMercado = nomeMercado
    this.cnpj = cnpj
  }

  // Criar o método
  listarMercados(): void {
    Body(`Nome do mercado...: ${this.nomeMercado}`)
    Body(`Cpf do mercado....: ${this.cnpj}`)
  }
}

// acessar campos
const mercado = new Mercado('Mercado', 12345678)
Body(mercado.nomeMercado)
Body(mercado.cnpj)
