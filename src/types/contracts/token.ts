import { Coin } from 'cosmwasm'
import { CollectionInfo, Expiration, Locks, Metadata, TokenInfo } from '../shared'
import { WhitelistContractInstantiateMsg } from './whitelist'

export type TokenContractExecuteMsg =
  | 'transfer_nft'
  | 'send_nft'
  | 'approve'
  | 'revoke'
  | 'approve_all'
  | 'revoke_all'
  | 'mint'
  | 'burn'
  | 'update_operators'
  | 'update_royalty_share'
  | 'admin_transfer_nft'
  | 'update_locks'
  | 'update_token_locks'
  | 'update_per_address_limit'
  | 'update_start_time'
  | 'init_metadata_contract'
  | 'init_whitelist_contract'

export const TokenContractExecuteMsg = {
  TRANSFER_NFT: 'transfer_nft' as TokenContractExecuteMsg,
  SEND_NFT: 'send_nft' as TokenContractExecuteMsg,
  APPROVE: 'approve' as TokenContractExecuteMsg,
  REVOKE: 'revoke' as TokenContractExecuteMsg,
  APPROVE_ALL: 'approve_all' as TokenContractExecuteMsg,
  REVOKE_ALL: 'revoke_all' as TokenContractExecuteMsg,
  MINT: 'mint' as TokenContractExecuteMsg,
  BURN: 'burn' as TokenContractExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as TokenContractExecuteMsg,
  UPDATE_ROYALTY_SHARE: 'update_royalty_share' as TokenContractExecuteMsg,
  ADMIN_TRANSFER_NFT: 'admin_transfer_nft' as TokenContractExecuteMsg,
  UPDATE_LOCKS: 'update_locks' as TokenContractExecuteMsg,
  UPDATE_TOKEN_LOCKS: 'update_token_locks' as TokenContractExecuteMsg,
  UPDATE_PER_ADDRESS_LIMIT: 'update_per_address_limit' as TokenContractExecuteMsg,
  UPDATE_START_TIME: 'update_start_time' as TokenContractExecuteMsg,
  INIT_METADATA_CONTRACT: 'init_metadata_contract' as TokenContractExecuteMsg,
  INIT_WHITELIST_CONTRACT: 'init_whitelist_contract' as TokenContractExecuteMsg
}

export type TokenContractQueryMsg =
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

export const TokenContractQueryMsg = {
  OWNER_OF: 'owner_of' as TokenContractQueryMsg,
  APPROVAL: 'approval' as TokenContractQueryMsg,
  APPROVALS: 'approvals' as TokenContractQueryMsg,
  ALL_OPERATORS: 'all_operators' as TokenContractQueryMsg,
  NUM_TOKENS: 'num_tokens' as TokenContractQueryMsg,
  CONTRACT_INFO: 'contract_info' as TokenContractQueryMsg,
  NFT_INFO: 'nft_info' as TokenContractQueryMsg,
  ALL_NFT_INFO: 'all_nft_info' as TokenContractQueryMsg,
  TOKENS: 'tokens' as TokenContractQueryMsg,
  ALL_TOKENS: 'all_tokens' as TokenContractQueryMsg,
  MINTER: 'minter' as TokenContractQueryMsg,
  LOCKS: 'locks' as TokenContractQueryMsg,
  TOKEN_LOCKS: 'token_locks' as TokenContractQueryMsg,
  MINTED_TOKENS_PER_ADDRESS: 'minted_tokens_per_address' as TokenContractQueryMsg,
  COLLECTION_INFO: 'collection_info' as TokenContractQueryMsg,
  CONTRACTS: 'contracts' as TokenContractQueryMsg,
  CONFIG: 'config' as TokenContractQueryMsg,
  CONTRACT_OPERATORS: 'contract_operators' as TokenContractQueryMsg
}

export interface TokenContractInstantiateMsg {
  admin: string
  token_info: TokenInfo
  per_address_limit?: number
  start_time?: string
  collection_info: CollectionInfo
  max_token_limit?: number
  unit_price?: Coin
  native_denom: String
  royalty_share?: string
}

export interface TokenContractTransferNftMsg {
  recipient: string
  token_id: string
}

export interface TokenContractSendNftMsg {
  contract: string
  token_id: string
  msg: string
}

export interface TokenContractApproveMsg {
  spender: string
  token_id: string
  expires?: Expiration
}

export interface TokenContractRevokeMsg {
  spender: string
  token_id: string
}

export interface TokenContractApproveAllMsg {
  operator: string
  expires?: Expiration
}

export interface TokenContractRevokeAllMsg {
  operator: string
}

export interface TokenContractMintMsg {
  owner: string
}

export interface TokenContractBurnMsg {
  token_id: string
}

export interface TokenContractUpdateOperatorsMsg {
  addrs: string[]
}

export interface TokenContractUpdateRoyaltyShareMsg {
  royalty_share: string
}

export interface TokenContractAdminTransferNftMsg {
  recipient: string
  token_id: string
}

export interface TokenContractUpdateLocksMsg {
  locks: Locks
}

export interface TokenContractUpdateTokenLocksMsg {
  token_id: string
  locks: Locks
}

export interface TokenContractUpdatePerAddressLimitMsg {
  per_address_limit?: number
}

export interface TokenContractUpdateStartTimeMsg {
  start_time?: string
}

export interface TokenContractInitMetadataContractMsg {
  code_id: number
  metadata_type: Metadata
}

export interface TokenContractInitWhitelistContractMsg {
  code_id: number
  instantiate_msg: WhitelistContractInstantiateMsg
}
