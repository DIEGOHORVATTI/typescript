import '../global'
import { Body, Title } from '../function'

Title('Modificador de acesso readdoly - ex 1')
class Funcionario_1 {
  readonly dataNascimento: Date

  constructor(readonly DataNascimento: Date) {
    this.dataNascimento = DataNascimento
  }
}
const funcionario_1 = new Funcionario_1(new Date(2023, 1, 7))
Body(funcionario_1.dataNascimento)
// funcionario_1.dataNascimento = new Date(2023, 1, 7)

Title('Modificador de acesso readdoly - ex 2')
class Funcionario_2 {
  nome: string
  readonly codFuncionario: string

  constructor(readonly CodFuncionario: string, Nome: string) {
    ;(this.codFuncionario = CodFuncionario), (this.nome = Nome)
  }

  retornaDados(): void {
    Body(`Nome do funcionario: ${this.nome}`)
    Body(`Codigo do funcionario: ${this.codFuncionario}`)
  }
}
const funcionario_2 = new Funcionario_2('XDFV-123212', 'Diogo')
funcionario_2.nome = 'Diego'
Body(funcionario_2.retornaDados())
// funcionario_1.dataNascimento = new Date(2023, 1, 7)

Title('Modificador de acesso readdoly - ex 3')
type Fincionario = {
  nome: string
  codFuncionario: string
}

const Funcionario_3: Readonly<Fincionario> = {
  nome: 'Diego',
  codFuncionario: 'XYZ-123'
}
// Funcionario_3.nome = 'Diego'
// Funcionario_3.codFuncionario = 'XYZ-1234'

const Funcionario_4: Fincionario = {
  nome: 'Diego',
  codFuncionario: 'XYZ-123'
}
Funcionario_4.nome = 'Diego'
Funcionario_4.codFuncionario = 'XYZ-1234'
Body(Funcionario_4)
