import './global'
import { Body, Title } from './function'

Title('Types Any')
const parametro_1 = (parm: any) => {
  return parm
}
Body(parametro_1(true))

Title('Types Any inferido implicidademente')
let parametro_2
parametro_2 = 'ola pitter'
Body(parametro_2, typeof parametro_2)

Title('Types Any quando usar')
const parametro_3: { [campoFormulario: string]: any } = {
  nome: 'Diego',
  cargo: 'Treinner software engine',
  idade: 20
}
Body(parametro_3)
