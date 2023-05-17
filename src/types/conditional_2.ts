type Paises = 'Brasil' | 'Argentina' | 'Chile' | 'Uruguai'

type Carros = 'Fiat' | 'Ford' | 'Chevrolet' | 'Volkswagen'

export type PageTypes = {
  Carros: Carros
  paises: Paises
}

type Filters<T> = {
  type: keyof T
  keys: Array<keyof T[T['type']]>
}

const filters: Filters<PageTypes> = {
  type: 'Carros',
  keys: ['Ford']
}

console.log(filters)
