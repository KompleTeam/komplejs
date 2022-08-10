import { Coin } from 'cosmwasm'
import { CollectionInfo, TokenInfo } from '../shared'

export type ExecuteMsg =
  | 'create_collection'
  | 'update_public_collection_creation'
  | 'update_mint_lock'
  | 'mint'
  | 'mint_to'
  | 'permission_mint'
  | 'update_operators'
  | 'update_linked_collections'

export const ExecuteMsg = {
  CREATE_COLLECTION: 'create_collection' as ExecuteMsg,
  UPDATE_PUBLIC_COLLECTION_CREATION: 'update_public_collection_creation' as ExecuteMsg,
  UPDATE_MINT_LOCK: 'update_mint_lock' as ExecuteMsg,
  MINT: 'mint' as ExecuteMsg,
  MINT_TO: 'mint_to' as ExecuteMsg,
  PERMISSION_MINT: 'permission_mint' as ExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as ExecuteMsg,
  UPDATE_LINKED_COLLECTIONS: 'update_linked_collections' as ExecuteMsg
}

export type QueryMsg =
  | 'config'
  | 'collection_address'
  | 'operators'
  | 'collection_types'
  | 'linked_collections'

export const QueryMsg = {
  CONFIG: 'config' as QueryMsg,
  COLLECTION_ADDRESS: 'collection_address' as QueryMsg,
  OPERATORS: 'operators' as QueryMsg,
  COLLECTION_TYPES: 'collection_types' as QueryMsg,
  LINKED_COLLECTIONS: 'linked_collections' as QueryMsg
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

export interface UpdatePublicCollectionCreation {
  public_collection_creation: boolean
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
