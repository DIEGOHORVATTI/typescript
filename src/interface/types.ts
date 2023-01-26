import '../global'
import { Body, Title } from '../function'

/* 
  Intersection types combina dois ou mais 
  tipos, ou seja, um tipo que é composto
*/

Title('Intersection Types')
interface Endereco {
  rua: string
  bairro: string
  cidade: string
}

interface Pessoa {
  nome: string
  idade: number
  profissao: string
}

type EnderecoPessoa = Endereco & Pessoa

const IEnderecoPessoa: EnderecoPessoa = {
  nome: 'Diego',
  idade: 20,
  profissao: 'Desenvolvidor',
  rua: 'centro',
  bairro: 'centro',
  cidade: 'Videira - sc'
}
Body(IEnderecoPessoa)
