import { Coin } from 'cosmwasm'
import { CollectionInfo, Expiration, Locks, Metadata, Royalty, TokenInfo } from '../shared'

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
  start_time?: string
  collection_info: CollectionInfo
  max_token_limit?: number
  unit_price?: Coin
  native_denom: String
}

export interface TransferNftMsg {
  recipient: string
  token_id: string
}

export interface SendNftMsg {
  contract: string
  token_id: string
  msg: string
}

export interface ApproveMsg {
  spender: string
  token_id: string
  expires?: Expiration
}

export interface RevokeMsg {
  spender: string
  token_id: string
}

export interface ApproveAllMsg {
  operator: string
  expires?: Expiration
}

export interface RevokeAllMsg {
  operator: string
}

export interface MintMsg {
  owner: string
}

export interface BurnMsg {
  token_id: string
}

export interface UpdateOperatorsMsg {
  addrs: string[]
}

export interface AdminTransferNftMsg {
  recipient: string
  token_id: string
}

export interface UpdateLocksMsg {
  locks: Locks
}

export interface UpdateTokenLocksMsg {
  token_id: string
  locks: Locks
}

export interface UpdateOperationLockMsg {
  lock: boolean
}

export interface UpdatePerAddressLimitMsg {
  per_address_limit?: number
}

export interface UpdateStartTimeMsg {
  start_time?: string
}

export interface UpdateWhitelistMsg {
  whitelist?: string
}

export interface UpdateRoyaltyMsg {
  royalty?: string
}

export interface UpdateMetadataMsg {
  metadata?: string
}

export interface InitMetadataContractMsg {
  code_id: number
  metadata_type: Metadata
}

export interface InitRoyaltyContractMsg {
  code_id: number
  share: string
  royalty_type: Royalty
}

export interface InitWhitelistContractMsg {
  code_id: number
  instantiate_msg: any
}
