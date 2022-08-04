import { Coin } from 'cosmwasm'
import { CollectionInfo, Expiration, TokenInfo } from '../shared'

export type ExecuteMsg =
  | 'init_mint_module'
  | 'init_permission_module'
  | 'init_merge_module'
  | 'init_marketplace_module'

export type QueryMsg = 'config' | 'controller_info' | 'module_address'

export interface InstantiateMsg {
  admin: string
  token_info: TokenInfo
  per_address_limit?: number
  star_time?: string
  collection_info: CollectionInfo
  max_token_limit?: number
  unit_price?: Coin
  native_denom: String
}

export interface TransferNft {
  recipient: string
  token_id: string
}

export interface SendNft {
  contract: string
  token_id: string
  msg: string
}

export interface Approve {
  spender: string
  token_id: string
  expires?: Expiration
}

export interface Revoke {
  spender: string
  token_id: string
}

export interface ApproveAll {
  operator: string
  expires?: Expiration
}

export interface RevokeAll {
  operator: string
}

export interface InitModuleMsg {
  code_id: number
}

export interface InitMarketplaceModuleMsg {
  code_id: number
  native_denom: string
}
