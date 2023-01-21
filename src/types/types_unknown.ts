import './global'
import { Body, Title } from './function'

Title('Type Unknown')
const Nome_1: unknown = 'Diego'
Body(Nome_1)

let valor_type_unknown: unknown
/* 
Title(
  'Type Unknown com erro ao tentar inferir tipos a variaveis com tipos já definidos'
)
const Nome_2: string = valor_type_unknown        //erro
const Nome_3: number = valor_type_unknown        //erro
const Nome_4: Array<string> = valor_type_unknown //erro
const Nome_5: boolean = valor_type_unknown       //erro
const Nome_6: any = valor_type_unknown           //erro
*/
//const Nome_7: unknown = valor_type_unknown
let Nome_7: number
let Nome_8: any
if (typeof Nome_7 === 'number') {
  Body('okay', Nome_7.toFixed(45678))
}
