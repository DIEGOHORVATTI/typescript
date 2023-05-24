import { Method } from 'axios'

type ClientAddress = {
  id?: number
  clientId?: number
  identification?: string
  zipcode?: string
  street?: string
  number?: string
  complement?: string | null
  reference?: string | null
  district?: string
  city?: number | string
  cityExt?: string
  state?: number | string
  stateExt?: string
  country?: number
  countryExt?: string
  location?: { lat: number; lng: number }
  createdAt?: string | null
  createdAtFormatted?: string
}

type ServiceOrdersType = {
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

type FiltersPage = 'string' | 'number' | ' data' | 'boolean'

export type PageTypes = {
  serviceOrdersType: keyof ServiceOrdersType
  clientAddress: keyof ClientAddress
}

export type Filters<T extends PageTypes> = {
  filters: [
    {
      titleFilter: keyof T
      items: Array<{
        title: string
        filter: keyof T[keyof T]
        type: FiltersPage
      }>
    }
  ]
  urlFilters: {
    url: string
    method: Method
  }
}

export type CreateFilters<T extends PageTypes> = <K extends keyof T>(
  urlFilters: {
    url: string
    method: Method
  },
  filters: {
    titleFilter: keyof PageTypes
    items: Array<{
      title: string
      filter: T[K]
      type: FiltersPage
    }>
  }
) => Filters<T>

export const createFilters: CreateFilters<PageTypes> = (
  urlFilters,
  filters
) => {
  console.log(urlFilters, filters)
  return { urlFilters, filters }
}

createFilters(
  {
    method: 'link',
    url: '/teste'
  },
  {
    titleFilter: 'serviceOrdersType',
    items: [
      {
        title: 'asd',
        filter: 'location',
        type: ' data'
      }
    ]
  }
)
