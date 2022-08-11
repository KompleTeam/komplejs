export * from './mint'
export * from './merge'
export * from './permission'
export * from './marketplace'

export type MODULES = 'mint_module' | 'merge_module' | 'permission_module' | 'marketplace_module'

export const MODULES = {
  MINT: 'mint_module' as MODULES,
  MERGE: 'merge_module' as MODULES,
  PERMISSION: 'permission_module' as MODULES,
  MARKETPLACE: 'marketplace_module' as MODULES
}
