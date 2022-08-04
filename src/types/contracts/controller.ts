export type ExecuteMsg =
  | 'init_mint_module'
  | 'init_permission_module'
  | 'init_merge_module'
  | 'init_marketplace_module'

export const ExecuteMsg = {
  INIT_MINT_MODULE: 'init_mint_module' as ExecuteMsg,
  INIT_PERMISSION_MODULE: 'init_permission_module' as ExecuteMsg,
  INIT_MERGE_MODULE: 'init_merge_module' as ExecuteMsg,
  INIT_MARKETPLACE_MODULE: 'init_marketplace_module' as ExecuteMsg
}

export type QueryMsg = 'config' | 'controller_info' | 'module_address'

export const QueryMsg = {
  CONFIG: 'config' as QueryMsg,
  CONTROLLER_INFO: 'controller_info' as QueryMsg,
  MODULE_ADDRESS: 'module_address' as QueryMsg
}

export interface InstantiateMsg {
  name: string
  description: string
  image: string
  external_link?: string
}

export interface InitModuleMsg {
  code_id: number
}

export interface InitMarketplaceModuleMsg {
  code_id: number
  native_denom: string
}
