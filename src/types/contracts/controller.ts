export type ControllerContractExecuteMsg =
  | 'init_mint_module'
  | 'init_permission_module'
  | 'init_merge_module'
  | 'init_marketplace_module'

export const ControllerContractExecuteMsg = {
  INIT_MINT_MODULE: 'init_mint_module' as ControllerContractExecuteMsg,
  INIT_PERMISSION_MODULE: 'init_permission_module' as ControllerContractExecuteMsg,
  INIT_MERGE_MODULE: 'init_merge_module' as ControllerContractExecuteMsg,
  INIT_MARKETPLACE_MODULE: 'init_marketplace_module' as ControllerContractExecuteMsg
}

export type ControllerContractQueryMsg = 'config' | 'controller_info' | 'module_address'

export const ControllerContractQueryMsg = {
  CONFIG: 'config' as ControllerContractQueryMsg,
  CONTROLLER_INFO: 'controller_info' as ControllerContractQueryMsg,
  MODULE_ADDRESS: 'module_address' as ControllerContractQueryMsg
}

export interface ControllerContractInstantiateMsg {
  name: string
  description: string
  image: string
  external_link?: string
}

export interface ControllerContractInitModuleMsg {
  code_id: number
}

export interface ControllerContractInitMarketplaceModuleMsg {
  code_id: number
  native_denom: string
}
