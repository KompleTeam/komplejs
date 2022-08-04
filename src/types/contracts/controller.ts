export type ExecuteMsg =
  | 'init_mint_module'
  | 'init_permission_module'
  | 'init_merge_module'
  | 'init_marketplace_module'

export type QueryMsg = 'config' | 'controller_info' | 'module_address'

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
