import './global'
import { Body, Title } from './function'

Title('Type Object')
/* 
  objet minusculo representa qualquer valor 
  que não sejá um valo primitivo
*/

/*
  Object maiúsculo descreve a funcionalidade disponível
  em todos os objetos
*/

/*
  {} objeto que não possui propriedade própria
*/

Title('Exemplo básico de Object')
const pessoa = {
  nome: 'Diego',
  sobrenome: 'Horvatti',
  idade: 20,
  funcao: 'Trenner software engine'
}
Body(pessoa)

Title('Exemplo de Object como parametro de função')
function mostraPessoa(pessoa: { nome: string }) {
  return `Ola ${pessoa.nome}`
}
Body(mostraPessoa(pessoa), mostraPessoa({ nome: 'Reges' }))

Title('Exemplo de Object com interface')
interface Pessoa_2 {
  nome: 'Reges'
  funcao: 'Software engine Pleno'
}
function mostraPessoa_2(pessoa: Pessoa_2) {
  return `Ola ${pessoa.nome} vc é ${pessoa.funcao}`
}
Body(mostraPessoa_2({ nome: 'Reges', funcao: 'Software engine Pleno' }))

Title('Exemplo de Object como type alias')
type Pessoa_3 = {
  nome: string
  funcao: string
  linguagem: string
}
function mostraPessoa_3(pessoa: Pessoa_3) {
  return `Ola ${pessoa.nome} vc trabalhalha como ${pessoa.funcao} usando ${pessoa.linguagem} como linguagem`
}
Body(
  mostraPessoa_3({
    nome: 'Diogo',
    funcao: 'Estudante',
    linguagem: 'JavaScript/TypeScript'
  })
)

Title('Exemplo de Object como type alias opcionalmente')
type Pessoa_4 = {
  nome: string
  funcao?: string
  linguagem: string
}
function mostraPessoa_4(pessoa: Pessoa_4) {
  let valida: boolean = true
  if (pessoa.funcao != undefined) valida = false
  return valida
    ? `Ola ${pessoa.nome} vc usará ${pessoa.linguagem} como linguagem de ´programação`
    : `Ola ${pessoa.nome} vc trabalhalha como ${pessoa.funcao} usando ${pessoa.linguagem} como linguagem`
}
Body(
  mostraPessoa_4({
    nome: 'Diogo',
    //funcao: 'Estudante',
    linguagem: 'JavaScript/TypeScript'
  })
)

Title('Exemplo de Object com readonly')
type Pessoa_5 = {
  nome: string
  funcao?: string
  readonly linguagem: string
}
function mostraPessoa_5(pessoa: Pessoa_5) {
  let valida: boolean = true
  if (pessoa.funcao != undefined) valida = false
  return valida
    ? `Ola ${pessoa.nome} vc usará ${pessoa.linguagem} como linguagem de ´programação`
    : `Ola ${pessoa.nome} vc trabalhalha como ${pessoa.funcao} usando ${pessoa.linguagem} como linguagem`
}
Body(
  mostraPessoa_5({
    nome: 'Diogo',
    //funcao: 'Estudante',
    linguagem: 'JavaScript/TypeScript'
  })
)

Title('Exemplo de Object com extenção (heranças) Interface')
interface Mae {
  nome: string
}

interface Pai {
  sobreNome: string
}
interface Filho extends Mae, Pai {
  idade: number
}
const filha: Filho = {
  nome: 'Sofia',
  sobreNome: 'Anbuguerque',
  idade: 18
}
Body(filha)

Title('Exemplo de Object intersecção')
interface Cachorro {
  raca: string
  latido: string
}

interface Gato {
  raca: string
  miado: string
}

type Animais = Cachorro & Gato

const animais: Animais = {
  raca: 'Vira-lata',
  latido: 'Miau',
  miado: 'Miau'
}
Body(animais)

Title('Exemplo de Object com Generic Objects')
type Usuario = {
  nome: string
  email: string
}

type Admin = {
  nome: string
  email: string
  admin: boolean
}

const usuario: Usuario = {
  nome: 'Casandra',
  email: 'casandra@gmail.com'
}

const admin: Admin = {
  nome: 'Mauro',
  email: 'Mauro@gmail.com',
  admin: true
}

function acessarSistema<T>(usuario: T): T {
  return usuario
}

Body(acessarSistema<Usuario>(usuario))
Body(acessarSistema<Admin>(admin))
