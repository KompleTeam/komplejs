import { Modules, Permissions } from '../shared'

export type PermissionModuleExecuteMsg = 'update_module_permissions' | 'update_operators' | 'check'

export const PermissionModuleExecuteMsg = {
  UPDATE_MODULE_PERMISSIONS: 'update_module_permissions' as PermissionModuleExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as PermissionModuleExecuteMsg,
  CHECK: 'check' as PermissionModuleExecuteMsg
}

export type PermissionModuleQueryMsg = 'module_permissions' | 'operators'

export const PermissionModuleQueryMsg = {
  MODULE_PERMISSIONS: 'module_permissions' as PermissionModuleQueryMsg,
  OPERATORS: 'operators' as PermissionModuleQueryMsg
}

export interface PermissionModuleInstantiateMsg {
  admin: string
}

export interface PermissionModuleUpdateModulePermissionsMsg {
  module: Modules
  permissions: Permissions
}

export interface PermissionModuleUpdateOperatorsMsg {
  addrs: string[]
}

export interface PermissionModuleCheckMsg {
  module: Modules
  msg: string
}
