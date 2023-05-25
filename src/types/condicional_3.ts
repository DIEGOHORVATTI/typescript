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

type PageTypes = {
  serviceOrdersType: keyof ServiceOrdersType
  clientAddress: keyof ClientAddress
}

type UrlFilters = {
  url: `/${string}`
  method: Method
  data?: {}
}

type Filters<T extends PageTypes, K extends keyof T> = {
  filters: [
    {
      titleFilter: keyof T
      items: Array<{
        title: string
        filter: T[K]
        type: FiltersPage
      }>
    }
  ]
  urlFilters: UrlFilters
}

type CreateFilters<T extends PageTypes> = <K extends keyof T>(
  urlFilters: UrlFilters,
  filters: {
    titleFilter: K
    items: Array<{
      title: string
      filter: T[K]
      type: FiltersPage
    }>
  }
) => Filters<T, K>

const createFilters: CreateFilters<PageTypes> = (urlFilters, filters) => ({
  filters: [filters],
  urlFilters
})

createFilters(
  {
    method: 'link',
    url: '/serviceOrders'
  },
  {
    titleFilter: 'clientAddress',
    items: [
      {
        title: 'titulo do painel',
        filter: 'reference',
        type: 'number'
      }
    ]
  }
)
