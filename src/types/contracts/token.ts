import { Coin } from 'cosmwasm'
import { CollectionInfo, Expiration, Locks, Metadata, Royalty, TokenInfo } from '../shared'

export type ExecuteMsg =
  | 'transfer_nft'
  | 'send_nft'
  | 'approve'
  | 'revoke'
  | 'approve_all'
  | 'revoke_all'
  | 'mint'
  | 'burn'
  | 'update_operators'
  | 'admin_transfer_nft'
  | 'update_locks'
  | 'update_token_locks'
  | 'update_operation_lock'
  | 'update_per_address_limit'
  | 'update_start_time'
  | 'update_whitelist'
  | 'update_royalty'
  | 'update_metadata'
  | 'init_metadata_contract'
  | 'init_royalty_contract'
  | 'init_whitelist_contract'

export const ExecuteMsg = {
  TRANSFER_NFT: 'transfer_nft' as ExecuteMsg,
  SEND_NFT: 'send_nft' as ExecuteMsg,
  APPROVE: 'approve' as ExecuteMsg,
  REVOKE: 'revoke' as ExecuteMsg,
  APPROVE_ALL: 'approve_all' as ExecuteMsg,
  REVOKE_ALL: 'revoke_all' as ExecuteMsg,
  MINT: 'mint' as ExecuteMsg,
  BURN: 'burn' as ExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as ExecuteMsg,
  ADMIN_TRANSFER_NFT: 'admin_transfer_nft' as ExecuteMsg,
  UPDATE_LOCKS: 'update_locks' as ExecuteMsg,
  UPDATE_TOKEN_LOCKS: 'update_token_locks' as ExecuteMsg,
  UPDATE_OPERATION_LOCK: 'update_operation_lock' as ExecuteMsg,
  UPDATE_PER_ADDRESS_LIMIT: 'update_per_address_limit' as ExecuteMsg,
  UPDATE_START_TIME: 'update_start_time' as ExecuteMsg,
  UPDATE_WHITELIST: 'update_whitelist' as ExecuteMsg,
  UPDATE_ROYALTY: 'update_royalty' as ExecuteMsg,
  UPDATE_METADATA: 'update_metadata' as ExecuteMsg,
  INIT_METADATA_CONTRACT: 'init_metadata_contract' as ExecuteMsg,
  INIT_ROYALTY_CONTRACT: 'init_royalty_contract' as ExecuteMsg,
  INIT_WHITELIST_CONTRACT: 'init_whitelist_contract' as ExecuteMsg
}

export type QueryMsg =
  | 'owner_of'
  | 'approval'
  | 'approvals'
  | 'all_operators'
  | 'num_tokens'
  | 'contract_info'
  | 'nft_info'
  | 'all_nft_info'
  | 'tokens'
  | 'all_tokens'
  | 'minter'
  | 'locks'
  | 'token_locks'
  | 'minted_tokens_per_address'
  | 'collection_info'
  | 'contracts'
  | 'config'
  | 'contract_operators'

export const QueryMsg = {
  OWNER_OF: 'owner_of' as QueryMsg,
  APPROVAL: 'approval' as QueryMsg,
  APPROVALS: 'approvals' as QueryMsg,
  ALL_OPERATORS: 'all_operators' as QueryMsg,
  NUM_TOKENS: 'num_tokens' as QueryMsg,
  CONTRACT_INFO: 'contract_info' as QueryMsg,
  NFT_INFO: 'nft_info' as QueryMsg,
  ALL_NFT_INFO: 'all_nft_info' as QueryMsg,
  TOKENS: 'tokens' as QueryMsg,
  ALL_TOKENS: 'all_tokens' as QueryMsg,
  MINTER: 'minter' as QueryMsg,
  LOCKS: 'locks' as QueryMsg,
  TOKEN_LOCKS: 'token_locks' as QueryMsg,
  MINTED_TOKENS_PER_ADDRESS: 'minted_tokens_per_address' as QueryMsg,
  COLLECTION_INFO: 'collection_info' as QueryMsg,
  CONTRACTS: 'contracts' as QueryMsg,
  CONFIG: 'config' as QueryMsg,
  CONTRACT_OPERATORS: 'contract_operators' as QueryMsg
}

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
