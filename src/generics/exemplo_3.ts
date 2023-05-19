import '../global'
import { Body } from '../function'

type Pessoa = {
  nome: string
  idade: number
}

const obterPesoaIdadeMaiorQue = <T extends Pessoa>(
  pessoas: Array<T>,
  idade: number
): Array<T> => {
  return pessoas.filter((pessoas) => pessoas.idade > idade)
}

const pessoas: Array<Pessoa> = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 30 },
  { nome: 'José', idade: 40 },
  { nome: 'Pedro', idade: 50 },
  { nome: 'Paulo', idade: 60 },
  { nome: 'Ana', idade: 15 }
]

const pessoaComIdadeMaiorQue18 = obterPesoaIdadeMaiorQue<Pessoa>(pessoas, 18)
Body(pessoaComIdadeMaiorQue18)
