import { useContext } from 'react'
import { IdentityContext } from './context'
import { IdentityContextProps } from './types'

export function useIdentityContext(): IdentityContextProps {
  const context = useContext(IdentityContext)
  if (context == null) {
    throw new Error('IdentityProvider missing')
  }
  return context
}
