import { Title } from '../function'

// TODO: verificar se é possível fazer um type conditional com mais de uma condição
Title('Type conditional, ex - 1')

type AutoCompleteSLProps = {
  size?: any
  url?: string
  title?: string
  image?: boolean
  error?: boolean
  displayKey?: string
  search?: boolean
  required?: boolean
  onFocus?: any
  helperText?: string
  imageShape?: 'circular' | 'rounded' | 'square'
  variant?: 'outlined' | 'standard' | 'filled' | undefined
  value?: { id?: any; value?: any; [key: string]: any } | string | number
} & (
  | { singleLoad?: boolean; minSearchLength?: never }
  | { singleLoad?: never; minSearchLength?: number }
)

const AutoCompleteSL: AutoCompleteSLProps = {
  size: 'small',
  url: 'https://api.github.com/search/users?q=',
  title: 'Usuário',
  image: true,
  error: false,
  displayKey: 'login',
  search: true,
  required: true,
  onFocus: () => {},
  helperText: 'Digite o nome do usuário',
  imageShape: 'circular',
  variant: 'outlined',
  value: { id: 1, value: 'teste' },
  singleLoad: true,
  minSearchLength: 3
}
