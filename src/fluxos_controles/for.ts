import '../global'
import { Body, Title } from '../function'

Title('Exemplo for')
for (let index = 0; index < 30; index++) {
  Body(`${index}`)
}

Title('Exemplo for com array in -> indices')
const arrayNumeros: Array<number> = [0, 9, 7, 4, 6, 3]
for (const index in arrayNumeros) {
  Body(index, arrayNumeros[index])
}

Title('Exemplo for com array of -> valores')
for (const valor of arrayNumeros) {
  Body(arrayNumeros)
}

Title('Exemplo de ordenação com -> sort')
const ordemNumerica: number[] = arrayNumeros.sort()
Body(ordemNumerica)
