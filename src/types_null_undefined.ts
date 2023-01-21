import './global'
import { Body, Title } from './function'

Title('Type Null')
let Valor_1 = null
Body(Valor_1)
Body(typeof Valor_1)

Title('Type Undefined')
let Valor_2 = undefined
Body(Valor_2)
Body(typeof Valor_2)

Title('Diferenças e similaridades Null vs Undefined')
Body('Ex 1: ', null == undefined)
Body('Ex 2: ', null === undefined)
