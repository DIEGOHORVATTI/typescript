import '../global'
import { Body, Title } from '../function'

Title('Ex 1 - membros estáticos ')
class Funcionario {
  static contratacoes = 0

  constructor(
    private nome: string,
    private sobreNome: string,
    private titulo: string
  ) {
    Funcionario.contratacoes++
  }
}
const funcionario_1 = new Funcionario('Diego', 'Horvatti', 'Dev')
const funcionario_2 = new Funcionario('Diego', 'Horvatti', 'Dev')
Body(Funcionario.contratacoes)

Title('Ex 2 - membros estáticos ')
class Funcionario_1 {
  private static contratacoes = 0

  constructor(
    private nome: string,
    private sobreNome: string,
    private titulo: string
  ) {
    Funcionario_1.contratacoes++
  }

  public static retornarContratacoes() {
    return Funcionario_1.contratacoes
  }
}
const funcionario_1_1 = new Funcionario_1('Diego', 'Horvatti', 'Dev')
const funcionario_1_2 = new Funcionario_1('Diego', 'Horvatti', 'Dev')
Body(Funcionario_1.retornarContratacoes())

Title('Ex 3 - membros estáticos ')
type Raca = 'Branca' | 'Preta' | 'Parda' | 'Amarela'
class Pessoa {
  public nome: string
  public idade: number
  public racas: Raca[]
  public static QTD_Pessoa_Casa = 0

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome
    this.idade = idade
    this.racas = racas

    Pessoa.QTD_Pessoa_Casa++
    Body(Pessoa.QTD_Pessoa_Casa)
  }

  public retornarQtdCachorroVendido() {
    Body(`Nome: ${this.nome}, Idade: ${this.idade}, Raças: ${this.racas}}`)
  }
}

const Pessoa_1 = new Pessoa('Diego', 20, ['Branca'])
const Pessoa_2 = new Pessoa('Fabiana', 18, ['Preta'])
Body()
Body(Pessoa.QTD_Pessoa_Casa)
