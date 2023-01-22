import '../global'
import { Body, Title } from '../function'

Title('Usando rest parameters')
function somaNumerosResto(...parms: number[]) {
  let acumulador = 0
  parms.forEach((parms) => (acumulador += parms))
  return acumulador
}

Body(somaNumerosResto(30, 10, 20)) // 60
Body(somaNumerosResto(50, 5)) // 55
