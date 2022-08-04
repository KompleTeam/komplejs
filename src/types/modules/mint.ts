import { Coin } from 'cosmwasm'
import { CollectionInfo, TokenInfo } from '../shared'

export type ExecuteMsg =
  | 'create_collection'
  | 'update_mint_lock'
  | 'mint'
  | 'mint_to'
  | 'permission_mint'
  | 'update_operators'
  | 'update_linked_collections'

export const ExecuteMsg = {
  CREATE_COLLECTION: 'create_collection',
  UPDATE_MINT_LOCK: 'update_mint_lock',
  MINT: 'mint',
  MINT_TO: 'mint_to',
  PERMISSION_MINT: 'permission_mint',
  UPDATE_OPERATORS: 'update_operators',
  UPDATE_LINKED_COLLECTIONS: 'update_linked_collections'
}

export type QueryMsg =
  | 'config'
  | 'collection_address'
  | 'operators'
  | 'collection_types'
  | 'linked_collections'

export const QueryMsg = {
  CONFIG: 'config',
  COLLECTION_ADDRESS: 'collection_address',
  OPERATORS: 'operators',
  COLLECTION_TYPES: 'collection_types',
  LINKED_COLLECTIONS: 'linked_collections'
}

export interface InstantiateMsg {
  admin: string
}

export interface CreateCollectionMsg {
  code_id: number
  collection_info: CollectionInfo
  token_info: TokenInfo
  per_address_limit?: number
  start_time?: string
  unit_price?: Coin
  native_denom: string
  linked_collections?: number[]
}

export interface UpdateMintLockMsg {
  lock: boolean
}

export interface MintMsg {
  collection_id: number
}

export interface MintToMsg {
  collection_id: number
  recipient: string
}

export interface PermissionMintMsg {
  permission_msg: string
  collection_ids: number[]
}

export interface UpdateOperatorsMsg {
  addrs: string[]
}

export interface UpdateLinkedCollections {
  collection_id: number
  linked_collections: number[]
}
