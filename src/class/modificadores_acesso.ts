import '../global'
import { Body, Title } from '../function'

Title('Classes modificadores de acesso')

Title('Modificador public')
class Estudante {
  codigoEstudante: number
  public nomeEstudante: string
}
const estudante = new Estudante()
estudante.nomeEstudante = 'Diego'
estudante.codigoEstudante = 12345678
Body(`Nome do estudante.....: ${estudante.nomeEstudante}`)
Body(`Código do estudante...: ${estudante.codigoEstudante}`)

Title('Modificador private')
class Estudante_2 {
  codigoEstudante: number
  private nomeEstudante: string

  constructor(public CodigoEstudante: number, private NomeEstudante: string) {
    ;(this.codigoEstudante = CodigoEstudante),
      (this.nomeEstudante = NomeEstudante)
  }

  retornaNome(): string {
    return this.nomeEstudante
  }

  retornarDadosEstudante(): void {
    Body(`Nome do estudante.....: ${this.nomeEstudante}`)
    Body(`Código do estudante...: ${this.codigoEstudante}`)
  }
}
const estudante_2 = new Estudante_2(19879, 'João')
estudante_2.retornarDadosEstudante()

Title('Extends Estudate_2')
class Estudante_3 extends Estudante_2 {
  constructor(
    CodigoEstudante: number,
    NomeEstudante: string,
    private Curso?: string
  ) {
    super(CodigoEstudante, NomeEstudante)
    if (Curso === undefined) {
      this.Curso = Curso
    }
  }
  retornarDadosEstudante(): void {
    Body(
      `Código: ${this.codigoEstudante}; Nome: ${this.retornaNome()}; Curso: ${
        this.Curso
      }`
    )
  }
}

const estudante_3 = new Estudante_3(19879, 'João', 'Sistemas')
estudante_3.retornarDadosEstudante()
