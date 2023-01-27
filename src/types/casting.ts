import '../global'
import { Body, Title } from '../function'

Title('Type casting, ex - 1')
const nome: unknown = 'Diego'
Body(typeof nome)
Body((nome as string).toLocaleUpperCase())

Title('Type casting, ex - 2')
const carro = 'uno'
const tamanhoString: number = (<string>carro).length
Body(tamanhoString)
