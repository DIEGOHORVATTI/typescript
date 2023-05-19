export {}
console.clear()

export type ServiceOrdersType = {
  sector?: boolean
  city?: Array<number>
  model?: Array<number>
  type?: 'P' | 'F' | 'R'
  status?: Array<number>
  client?: Array<number>
  number?: Array<number>
  operator?: Array<number>
  technician?: Array<number>
  addressIdentification?: string
  serviceExecution?: Array<string>
}

export interface ClientAddress {
  id?: number
  clientId?: number
  identification?: string
  zipcode?: string
  street?: string
  number?: string
  complement?: string | null
  reference?: string | null
  district?: string
  city?: number
  cityExt?: string
  state?: number
  stateExt?: string
  country?: number
  countryExt?: string
  location?: string
  createdAt?: string | null
  createdAtFormatted?: string
}

export type PagesKeyof = {
  serviceOrdersType: keyof ServiceOrdersType
  clientAddress: keyof ClientAddress
}

export type PagesTypeof = {
  serviceOrdersType: ServiceOrdersType
  clientAddress: ClientAddress
}

type FieldTypes<T> = {
  [K in keyof T]: T[K] extends string
    ? 'string'
    : T[K] extends number
    ? 'number'
    : T[K] extends boolean
    ? 'boolean'
    : T[K] extends Date
    ? 'date'
    : never
}

export type Filters<T extends PagesKeyof> = {
  type: keyof T
  keys: Array<T[keyof T]>
}

const getKeysAndTypes = <T>(
  obj: T
): Record<keyof T, FieldTypes<T>[keyof T]> => {
  const result = {} as Record<keyof T, FieldTypes<T>[keyof T]>

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      const type =
        typeof value === 'string'
          ? 'string'
          : typeof value === 'number'
          ? 'number'
          : typeof value === 'boolean'
          ? 'boolean'
          : value instanceof Date
          ? 'date'
          : 'unknown'

      result[key] = type as FieldTypes<T>[keyof T]
    }
  }

  return result
}

export type CreateFilters<T extends PagesKeyof> = <K extends keyof T>(
  type: K,
  keys: Array<T[K]>
) => Filters<T>

const createFilters = <T extends PagesKeyof, TKey extends keyof T>(
  type: TKey,
  keys: Array<T[TKey]>
): Filters<T> => {
  const filters = {
    type,
    keys: [] as Array<T[TKey] & Record<string, FieldTypes<T[TKey]>>>
  }

  keys.forEach((key) => {
    const fieldType = getKeysAndTypes(key)
    filters.keys.push({ [key]: fieldType })
  })

  return filters
}

console.log(
  createFilters('serviceOrdersType', [
    'technician',
    'operator',
    'operator',
    'client',
    'city',
    'model'
  ])
)

console.log('------------------------------')

console.log(
  createFilters('clientAddress', [
    'complement',
    'reference',
    'country',
    'country'
  ])
)
