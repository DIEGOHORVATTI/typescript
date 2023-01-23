import '../global'
import { Body, Title } from '../function'

/*
  get --> acessar itens
  set --> modificar itens
*/

Title('Uso de Get & Set')
class Quadrado {
  private largura = 2
  private altura = 4

  get calcArea() {
    return this.altura * this.largura
  }
}
Body(new Quadrado().calcArea)

Title('Uso do Get mais aprofundado')
class Estudante {
  private nome: string = 'Diego Horvatti'
  private semestre: number
  private curso: string = 'Ciência da Computação'

  public get nomeEstudante(): string {
    return this.nome
  }
}
const estudante = new Estudante()
const resultado = estudante.nomeEstudante
Body(resultado)

Title('Uso do Set mais aprofundado')
class Estudante_2 {
  private nome: string
  private semestre: number
  private curso: string

  constructor(Nome: string, Semestre: number, Curso: string) {
    this.nome = Nome
    this.semestre = Semestre
    this.curso = Curso
  }

  public get cursos(): string {
    return this.curso
  }

  public set cursos(setCurso: string) {
    this.curso = setCurso
  }
}
const estudante_2 = new Estudante_2(
  'Diego Horvatti',
  3,
  'Ciência da Computação'
)
Body(estudante_2.cursos)
estudante_2.cursos = 'Piano'
Body(estudante_2.cursos)
