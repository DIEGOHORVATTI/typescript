import '../global'
import { Body, Title } from '../function'

Title('Exemplo 1 - Usando rest parameters')
function somaNumerosResto(...parms: Array<number>) {
  let acumulador = 0
  parms.forEach((parms) => (acumulador += parms))
  return acumulador
}
Body(somaNumerosResto(30, 10, 20)) // 60
Body(somaNumerosResto(50, 5)) // 55

Title('Exemplo 2 - Usando rest parameters')
function listarFrutas(frase: string, ...frutas: Array<string>) {
  return `${frase} ${frutas.join(', ')}`
}
Body(listarFrutas('Meu caro', 'Banana', 'Maçã', 'Melancia'))

Title('Exemplo 3 - Usando rest parameters')
class Produtos {
  public exibirProdutos(...produtos: Array<string>): void {
    for (const produto of produtos) {
      Body(produto)
    }
  }
}
const mercado: Produtos = new Produtos()
mercado.exibirProdutos('leite', 'trigo', 'ovos')
