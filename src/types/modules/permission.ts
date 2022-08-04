import { Modules, Permissions } from '../shared'

export type ExecuteMsg = 'update_module_permissions' | 'update_operators' | 'check'

export type QueryMsg = 'module_permissions' | 'operators'

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
