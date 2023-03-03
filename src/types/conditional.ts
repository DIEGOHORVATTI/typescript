import '../global'
import { Body, Title } from '../function'

/*
  type generic T
  variable with return of one or the othe type
*/

Title('Type conditional, ex - 1')
type DataNascimento = string
type Age = number

type InfoHead<T> = T extends number ? number : string

const dataNascimento: InfoHead<DataNascimento> = '15/11/2002'
Body(dataNascimento)

const age: InfoHead<Age> = 36
Body(age)

Title('Type conditional, ex - 2')
type Pessoa = {
  nome: string
  idade: number
  endereco: string
}

type Empresa = {
  nome: string
  cnpj: string
}

type EnderecoPessoa = {
  enderecoSecundario: string
  cidade: string
  pais: string
}

type EnderecoEmpresa = {
  localicacao: 'rua' | 'avenida' | 'praca'
}

type EnderecoFinal<T> = T extends { endereco: string }
  ? EnderecoPessoa
  : EnderecoEmpresa

const enderecoPessoa: EnderecoFinal<Pessoa> = {
  enderecoSecundario: 'rua paulo',
  cidade: 'são paulo',
  pais: 'brasil'
}

const enderecoEmpresa: EnderecoFinal<Empresa> = {
  localicacao: 'rua'
}

Body(enderecoPessoa)
Body(enderecoEmpresa)

Title('Type conditional, ex - 2')
type FormatFile = 'file' | 'jpg' | 'svg' | 'mp4' | 'mp3'

type FilterFileAudio<T> = T extends 'mp4' | 'mp3' ? T : never

type FileAudio = FilterFileAudio<FormatFile>

const fileAudio: FileAudio = 'mp3'
Body(fileAudio)
