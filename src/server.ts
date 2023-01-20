import chalk from 'chalk'

console.clear()

//==> Tipando função title
function Title(...parms: any) {
  console.log('\n')
  console.log(chalk.white.bgCyan.bold(` ${parms} `))
}

//==> Tipando função corpo
function Body(...parms: any) {
  console.log(parms)
}

Title('Tipando string')
const ex_1: string = 'Diego Horvatti'
Body(ex_1)

Title('Tipando number')
const ex_2: string = 'Diego Horvatti'
Body(ex_2)

Title('Tipando boolean')
const ex_3: boolean = true
Body(ex_3)

Title('Tipando arrays')
const ex_4_1: Array<string> = ['Diego', 'Horvatti']
const ex_4_2: string[] = ['Diego', 'Horvatti']
const ex_4_3: string[] = new Array('Diego', 'Horvatti')
Body(ex_4_1, ex_4_2, ex_4_3)

Title('Tipando tupla simple')
const tuple_1: [string, number, string, number] = ['hello', 1, 'world', 2]
for (let i = 0; i < tuple_1.length; i++) {
  Body(tuple_1[i])
}

Title('Tipando tupla heterogênia com spread operador')
const tuple_2: [string, ...string[]] = ['hello_1', 'hello_2', 'hello_3']
Body(...tuple_2)

Title('Tipando tupla heterogênia com spread operador')
const tuple_3: [string, number, boolean, ...string[]] = [
  'hello_1',
  20,
  false,
  ...tuple_2
]
Body(...tuple_3)

Title('Uso de função com dupla')
function Pessoa_2(nomes: string[], idades: number[]) {
  return [...nomes, ...idades]
}
Body(Pessoa_2(['Diego', 'Horvatti', 'escorpição'], [20, 30]))

Title('Labeled tuples com spread operator numa função')
type Nome =
  | [primeiroNome: string, sobreNome: string]
  | [primerioNome: string, nomeMeio: string, sobreNome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}
Body(criarPessoa('Diego', 'solza', 'Horvatti'))

/* Title('Tipando tupla com labels')
const tuple_3: [
  nome: string,
  oculpacao: string,
  empresa: string,
  idade: number
] = ['Diego Horvatti', 'Estudante - Estágiario', 'Leadeasy', 20]
Body(tuple_3)

Title('Tipando enum')
enum Color {
  Red,
  Green,
  Blue,
  Yellow
}
enum AnotherColor {
  Red = 1,
  Green = 2,
  Blue = 4,
  Yellow
}
Body(Color, AnotherColor, AnotherColor.Blue)
 */
