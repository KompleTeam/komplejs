import { Coin } from 'cosmwasm'

export type ExecuteMsg =
  | 'update_start_time'
  | 'update_end_time'
  | 'add_members'
  | 'remove_members'
  | 'update_per_address_limit'
  | 'update_member_limit'

export const ExecuteMsg = {
  UPDATE_START_TIME: 'update_start_time' as ExecuteMsg,
  UPDATE_END_TIME: 'update_end_time' as ExecuteMsg,
  ADD_MEMBERS: 'add_members' as ExecuteMsg,
  REMOVE_MEMBERS: 'remove_members' as ExecuteMsg,
  UPDATE_PER_ADDRESS_LIMIT: 'update_per_address_limit' as ExecuteMsg,
  UPDATE_MEMBER_LIMIT: 'update_member_limit' as ExecuteMsg
}

export type QueryMsg = 'config' | 'has_started' | 'has_end' | 'is_active' | 'members' | 'has_member'

export const QueryMsg = {
  CONFIG: 'config' as QueryMsg,
  HAS_STARTED: 'has_started' as QueryMsg,
  HAS_ENDED: 'has_end' as QueryMsg,
  IS_ACTIVE: 'is_active' as QueryMsg,
  MEMBERS: 'members' as QueryMsg,
  HAS_MEMBER: 'has_member' as QueryMsg
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
