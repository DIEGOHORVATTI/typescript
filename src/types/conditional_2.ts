type Paises = 'Brasil' | 'Argentina' | 'Chile' | 'Uruguai'

type Carros = 'Fiat' | 'Ford' | 'Chevrolet' | 'Volkswagen'

export type PageTypes = {
  Carros: Carros
  paises: Paises
}

type Filters<T extends PageTypes> = {
  type: keyof T
  keys: Array<T[keyof T]>
}

function createFilters<T extends PageTypes, K extends keyof T>(
  type: K,
  keys: Array<T[K]>
): Filters<T> {
  return { type, keys }
}

const filters = createFilters('paises', ['Brasil'])

console.log(filters)
