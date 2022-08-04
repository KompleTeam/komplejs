import { Modules, Permissions } from '../shared'

export type ExecuteMsg = 'update_module_permissions' | 'update_operators' | 'check'

export const ExecuteMsg = {
  UPDATE_MODULE_PERMISSIONS: 'update_module_permissions',
  UPDATE_OPERATORS: 'update_operators',
  CHECK: 'check'
}

export type QueryMsg = 'module_permissions' | 'operators'

export const QueryMsg = {
  MODULE_PERMISSIONS: 'module_permissions',
  OPERATORS: 'operators'
}

export interface InstantiateMsg {
  admin: string
}

export type Listing = 'Fixed' | 'Auction'

export interface UpdateModulePermissionsMsg {
  module: Modules
  permissions: Permissions
}

export interface UpdateOperatorsMsg {
  addrs: string[]
}

export interface CheckMsg {
  module: Modules
  msg: string
}
