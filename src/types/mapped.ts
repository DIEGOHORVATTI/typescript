import { Body } from '../function'

type Usuario = {
  telefone: string
  endereco: string
  idade: number
  nome: string
}

type FuncionarioOpsional = {
  endereco?: string
  telefone?: string
  idade?: number
  nome?: string
}

type FuncionarioOpsionalMapped = {
  [P in keyof Usuario]?: Usuario[P]
}

type FuncionarioSomenteLeitura = {
  readonly telefone: string
  readonly endereco: string
  readonly idade: number
  readonly nome: string
}

const UserMappingOpicional: FuncionarioOpsionalMapped = {
  telefone: '1234567890',
  endereco: 'Rua ABC',
  idade: 20
}

Body(UserMappingOpicional)
