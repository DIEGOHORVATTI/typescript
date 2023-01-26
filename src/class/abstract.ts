import '../global'
import { Body, Title } from '../function'

abstract class Talento {
  constructor(
    private nome: string,
    private sobreNome: string,
    private university: string
  ) {}

  abstract retornarSalario(): number

  get retornarNomeFuncionario(): string {
    return `Nome completo: ${this.nome} ${this.sobreNome}`
  }

  emitirUniversidade(): string {
    return `Universidade: ${this.university}`
  }
}
//const Talento_1 = new Talento('Diego', 'Horvatti') /* erro */

class FuncionarioTeste extends Talento {
  constructor(
    nome: string,
    sobreNome: string,
    university: string,
    private salario: number
  ) {
    super(nome, sobreNome, university)
  }

  retornarSalario(): number {
    return this.salario
  }
}

const funcionario_1 = new FuncionarioTeste(
  'Diego',
  'Horvatti',
  'Instituto Federal de Educação Ciência e Tecnologia Catarinense',
  1200
)

Body(funcionario_1.retornarNomeFuncionario)
Body(funcionario_1.emitirUniversidade())
