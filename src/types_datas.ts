import './global'
import { Body, Title } from './function'

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
