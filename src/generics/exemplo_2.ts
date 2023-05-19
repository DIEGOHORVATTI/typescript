import '../global'
import { Body, Title } from '../function'

const exibirElementos = <T>(items: Array<T>): void => {
  items.forEach((item) => Body(item))
}

const number: Array<number> = [1, 2, 3, 4, 5]
const estados: Array<string> = ['SP', 'RJ', 'MG', 'BA', 'RS']

exibirElementos<number>(number)
exibirElementos<string>(estados)
