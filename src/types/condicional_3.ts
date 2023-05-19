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

export type PageTypes = {
  serviceOrdersType: keyof ServiceOrdersType
  clientAddress: keyof ClientAddress
}

export type Filters<T extends PageTypes> = {
  type: keyof T
  keys: Array<T[keyof T]>
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

type KeysOfType<T, TProp> = {
  [K in keyof T]: T[K] extends TProp ? K : never
}[keyof T]

type FiltersMap<T extends PageTypes> = {
  [K in keyof T]: Record<KeysOfType<T[K], string>, FieldTypes<T[K]>>
}

export type CreateFilters<T extends PageTypes> = <K extends keyof T>(
  type: K,
  keys: Array<T[K]>
) => Filters<T>

export const createFilters = <T extends PageTypes, K extends keyof T>(
  type: K,
  keys: Array<T[K]>
): Filters<T> => {
  return { type, keys }
}

console.log(createFilters('serviceOrdersType', ['client', 'city', 'operator']))

/* 
{
  "technician": "Array<number>",
  "type": "'P' | 'F' | 'R'",
  "sector": "boolean",
}
*/
