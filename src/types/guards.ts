import '../global'
import { Body, Title } from '../function'

/*
  verificação de tipo
*/

Title('Type guards: typeof')
type alfaNumero = string | number

function exibirTipo(a: alfaNumero, b: alfaNumero) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return `${a}, ${b}`
  }

  throw new Error(
    'Argumentos invalidos! ambos precisão ser do tipo string ou number'
  )
}
Body(exibirTipo(10, 30))
Body(exibirTipo('tudo', 'bem'))
//Body(exibirTipo(10, 'bem'))

function detalhesFuncionrio(funcionario: string | number) {
  if (typeof funcionario == 'string') {
    return `O nome do funcionario é: ${funcionario}`
  } else if (typeof funcionario == 'number') {
    return `O ID do funcionario é: ${funcionario}`
  }
}
Body()
Body(detalhesFuncionrio('Diego Horvatti'))
Body(detalhesFuncionrio(100))

Title('Type guards: in')
interface humano {
  falar: () => void
}

interface leao {
  rugido: () => void
}

const dizerAlgo = (som: humano | leao) => {
  if ('falar' in som) {
    return som.falar()
  }

  return som.rugido()
}
dizerAlgo({ falar: () => console.log('Oi') })

Title('Type guards: instanceof, ex - 1')
const formatoData = (valor: Date | string) => {
  if (valor instanceof Date) {
    return valor.toUTCString()
  }

  return new Date(valor).toUTCString()
}
Body(formatoData(new Date('2020-01-01')))
Body(formatoData('2022-01-26'))

Title('Type guards: instanceof, ex - 2')
class Carro {
  placa: string
  marca: string

  constructor(placa: string, marca: string) {
    this.placa = placa
    this.marca = marca
  }
}

class Moto {
  placa: string
  ano: number

  constructor(placa: string, ano: number) {
    this.placa = placa
    this.ano = ano
  }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
  if (veiculo instanceof Carro) {
    return `Placa: ${veiculo.placa}, Marca: ${veiculo.marca}`
  } else if (veiculo instanceof Moto) {
    return `Placa: ${veiculo.placa}, Ano: ${veiculo.ano}`
  }
}
const carro = new Carro('ABC1234', 'Ford')
const moto = new Moto('XYZ1234', 2020)
Body(moto, carro)
Body(detalhesVeiculo(carro))
Body(detalhesVeiculo(moto))
