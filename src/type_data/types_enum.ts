import './global'
import { Body, Title } from '../function'

Title('Numeric Enum --> enum')
enum AnotherColor {
  Red = 1,
  Green = 2,
  Blue = 4,
  Yellow
}
Body(AnotherColor, AnotherColor.Blue)

Title('Numeric Enum dias da semana --> enum')
enum DiasSemana_1 {
  Segunda = 'seg',
  Terca = 'Ter',
  Quarta = 'Qua',
  Quinta = 'Qui',
  Sexta = 'Sex',
  Sabado = 'Sab',
  Domingo = 'Dom'
}
Body(DiasSemana_1)

Title('Numeric Enum dias da semana com const --> enum')
const enum DiasSemana_2 {
  seg = 'seg',
  Ter = 'Ter',
  Qua = 'Qua',
  Qui = 'Qui',
  Sex = 'Sex',
  Sab = 'Sab',
  Dom = 'Dom'
}

function dias(parms: DiasSemana_2) {
  return parms
}
Body(dias(DiasSemana_2.Qui))
// Body(dias(5))

Title(`Qauando utilizar enums`)
enum Tarefa {
  Todo,
  Progress,
  Done
}
const conscluirTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa conscluída com sucesso!'
}

if (conscluirTarefa.status === Tarefa.Done) {
  Body('Enviar e-mail: Tearefa Concluída!')
}
