import { TokenContractInstantiateMsg } from '../contracts'

export type MintModuleExecuteMsg =
  | 'create_collection'
  | 'update_public_collection_creation'
  | 'update_mint_lock'
  | 'mint'
  | 'mint_to'
  | 'permission_mint'
  | 'update_operators'
  | 'update_linked_collections'

export const MintModuleExecuteMsg = {
  CREATE_COLLECTION: 'create_collection' as MintModuleExecuteMsg,
  UPDATE_PUBLIC_COLLECTION_CREATION: 'update_public_collection_creation' as MintModuleExecuteMsg,
  UPDATE_MINT_LOCK: 'update_mint_lock' as MintModuleExecuteMsg,
  MINT: 'mint' as MintModuleExecuteMsg,
  MINT_TO: 'mint_to' as MintModuleExecuteMsg,
  PERMISSION_MINT: 'permission_mint' as MintModuleExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as MintModuleExecuteMsg,
  UPDATE_LINKED_COLLECTIONS: 'update_linked_collections' as MintModuleExecuteMsg
}

export type MintModuleQueryMsg =
  | 'config'
  | 'collection_address'
  | 'operators'
  | 'collection_types'
  | 'linked_collections'

export const MintModuleQueryMsg = {
  CONFIG: 'config' as MintModuleQueryMsg,
  COLLECTION_ADDRESS: 'collection_address' as MintModuleQueryMsg,
  OPERATORS: 'operators' as MintModuleQueryMsg,
  COLLECTION_TYPES: 'collection_types' as MintModuleQueryMsg,
  LINKED_COLLECTIONS: 'linked_collections' as MintModuleQueryMsg
}

export interface MintModuleInstantiateMsg {
  admin: string
}

export interface MintModuleCreateCollectionMsg {
  code_id: number
  token_instantiate_msg: TokenContractInstantiateMsg
  linked_collections?: number[]
}

export interface MintModuleUpdatePublicCollectionCreation {
  public_collection_creation: boolean
}

export interface MintModuleUpdateMintLockMsg {
  lock: boolean
}

export interface MintModuleMintMsg {
  collection_id: number
}

export interface MintModuleMintToMsg {
  collection_id: number
  recipient: string
}

export interface MintModulePermissionMintMsg {
  permission_msg: string
  collection_ids: number[]
}

export interface MintModuleUpdateOperatorsMsg {
  addrs: string[]
}

export interface MintModuleUpdateLinkedCollectionsMsg {
  collection_id: number
  linked_collections: number[]
}
