export * from './controller'
export * from './token'
export * from './whitelist'

export type CONTRACTS = 'controller' | 'token' | 'metadata' | 'whitelist'

export const CONTRACTS = {
  CONTROLLER: 'controller' as CONTRACTS,
  TOKEN: 'token' as CONTRACTS,
  METADATA: 'metadata' as CONTRACTS,
  WHITELIST: 'whitelist' as CONTRACTS
}
