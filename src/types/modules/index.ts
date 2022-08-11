export * from './mint'
export * from './merge'
export * from './permission'
export * from './marketplace'

export type MODULES = 'mint' | 'merge' | 'permission' | 'marketplace'

export const MODULES = {
  MINT: 'mint' as MODULES,
  MERGE: 'merge' as MODULES,
  PERMISSION: 'permission' as MODULES,
  MARKETPLACE: 'marketplace' as MODULES
}
