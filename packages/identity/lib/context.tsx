import { createContext } from 'react'
import { IdentityContextProps } from './types'

export const IdentityContext = createContext<IdentityContextProps | null>(null)
