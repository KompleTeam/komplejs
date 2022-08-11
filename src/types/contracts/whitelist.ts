import { Coin } from 'cosmwasm'

export type WhitelistContractExecuteMsg =
  | 'update_start_time'
  | 'update_end_time'
  | 'add_members'
  | 'remove_members'
  | 'update_per_address_limit'
  | 'update_member_limit'

export const WhitelistContractExecuteMsg = {
  UPDATE_START_TIME: 'update_start_time' as WhitelistContractExecuteMsg,
  UPDATE_END_TIME: 'update_end_time' as WhitelistContractExecuteMsg,
  ADD_MEMBERS: 'add_members' as WhitelistContractExecuteMsg,
  REMOVE_MEMBERS: 'remove_members' as WhitelistContractExecuteMsg,
  UPDATE_PER_ADDRESS_LIMIT: 'update_per_address_limit' as WhitelistContractExecuteMsg,
  UPDATE_MEMBER_LIMIT: 'update_member_limit' as WhitelistContractExecuteMsg
}

export type WhitelistContractQueryMsg =
  | 'config'
  | 'has_started'
  | 'has_end'
  | 'is_active'
  | 'members'
  | 'has_member'

export const WhitelistContractQueryMsg = {
  CONFIG: 'config' as WhitelistContractQueryMsg,
  HAS_STARTED: 'has_started' as WhitelistContractQueryMsg,
  HAS_ENDED: 'has_end' as WhitelistContractQueryMsg,
  IS_ACTIVE: 'is_active' as WhitelistContractQueryMsg,
  MEMBERS: 'members' as WhitelistContractQueryMsg,
  HAS_MEMBER: 'has_member' as WhitelistContractQueryMsg
}

export interface WhitelistContractInstantiateMsg {
  members: string[]
  start_time: number
  end_time: number
  unit_price: Coin
  per_address_limit: number
  member_limit: number
}

export interface WhitelistContractUpdateStartTimeMsg {
  timestamp: string
}

export interface WhitelistContractUpdateEndTimeMsg {
  timestamp: string
}

export interface WhitelistContractAddMembersMsg {
  members: string[]
}

export interface WhitelistContractRemoveMembersMsg {
  members: string[]
}

export interface WhitelistContractUpdatePerAddressLimitMsg {
  limit: number
}

export interface WhitelistContractUpdateMemberLimitMsg {
  limit: number
}
