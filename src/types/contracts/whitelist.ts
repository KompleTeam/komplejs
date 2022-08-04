import { Coin } from 'cosmwasm'

export type ExecuteMsg =
  | 'update_start_time'
  | 'update_end_time'
  | 'add_members'
  | 'remove_members'
  | 'update_per_address_limit'
  | 'update_member_limit'

export const ExecuteMsg = {
  UPDATE_START_TIME: 'update_start_time',
  UPDATE_END_TIME: 'update_end_time',
  ADD_MEMBERS: 'add_members',
  REMOVE_MEMBERS: 'remove_members',
  UPDATE_PER_ADDRESS_LIMIT: 'update_per_address_limit',
  UPDATE_MEMBER_LIMIT: 'update_member_limit'
}

export type QueryMsg = 'config' | 'has_started' | 'has_end' | 'is_active' | 'members' | 'has_member'

export const QueryMsg = {
  CONFIG: 'config',
  HAS_STARTED: 'has_started',
  HAS_ENDED: 'has_end',
  IS_ACTIVE: 'is_active',
  MEMBERS: 'members',
  HAS_MEMBER: 'has_member'
}

export interface InstantiateMsg {
  members: string[]
  start_time: number
  end_time: number
  unit_price: Coin
  per_address_limit: number
  member_limit: number
}

export interface UpdateStartTimeMsg {
  timestamp: string
}

export interface UpdateEndTimeMsg {
  timestamp: string
}

export interface AddMembersMsg {
  members: string[]
}

export interface RemoveMembersMsg {
  members: string[]
}

export interface UpdatePerAddressLimitMsg {
  limit: number
}

export interface UpdateMemberLimitMsg {
  limit: number
}
