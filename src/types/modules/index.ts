import { Modules } from '../shared'

export * from './mint'
export * from './merge'
export * from './permission'
export * from './marketplace'

export type MODULES = Modules

export const MODULES = {
  MINT_MODULE: 'mint_module' as MODULES,
  MERGE_MODULE: 'merge_module' as MODULES,
  PERMISSION_MODULE: 'permission_module' as MODULES,
  MARKETPLACE_MODULE: 'marketplace_module' as MODULES
}
