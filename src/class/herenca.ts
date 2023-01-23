import '../global'
import { Body, Title } from '../function'

Title('Herança - exemplo 1')
class Animal {
  mover(distancia: number = 0) {
    Body('Animal se moveu')
  }
}
class Cachorro extends Animal {
  latir(latido: string = 'Au au') {
    Body(latido)
  }
}
const cachorro = new Cachorro()
cachorro.latir()
cachorro.mover(10)

Title('Herança - exemplo 2')
class Pessoa {
  constructor(
    private nome: string,
    private sobreNome: string,
    private idade: number
  ) {
    this.nome = nome
    this.sobreNome = sobreNome
    this.idade = idade
  }

  apresenatrPessoa(): string {
    return `${this.nome} ${this.sobreNome}`
  }
}

class Funcionario extends Pessoa {
  constructor(
    nome: string,
    sobreNome: string,
    idade: number,
    private funcao: string
  ) {
    super(nome, sobreNome, idade)
  }

  retornarNomeFuncao(): string {
    return `nome: ${super.apresenatrPessoa()} função:${this.funcao}`
  }
}

const funcionario_1 = new Funcionario('Diego', 'Horvatti', 30, 'Desenvolvedor')
Body(funcionario_1)
Body(funcionario_1.apresenatrPessoa())
Body(funcionario_1.retornarNomeFuncao())
