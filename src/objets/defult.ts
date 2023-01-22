import '../global'
import { Body, Title } from '../function'

Title('Exemplo 1 - Usando parâmetros defult')
function descontoCompra(preco: number, desconto = 0.0) {
  return preco * (1 - desconto)
}
Body(descontoCompra(10, 0.2))

Title('Exemplo 2 - Usando parâmetros defult')
function exibirMensgaem(mensagem: string, saudar = 'eae bro') {
  return `saudar ${mensagem} !`
}
Body(exibirMensgaem('ola'))

Title('Exemplo 3 - Usando parâmetros defult')
function exibirNome(nome: string, sobrenome = 'Lemos') {
  return `nick name: ${nome} ${sobrenome}`
}
Body(exibirNome('Diego', 'Horvatti'))
Body(exibirNome('Diego'))
Body(exibirNome('Diego', undefined))
