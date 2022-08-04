export type ExecuteMsg = 'update_merge_lock' | 'merge' | 'permission_merge' | 'update_operators'

export const ExecuteMsg = {
  UPDATE_MERGE_LOCK: 'update_merge_lock' as ExecuteMsg,
  MERGE: 'merge' as ExecuteMsg,
  PERMISSION_MERGE: 'permission_merge' as ExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as ExecuteMsg
}

export type QueryMsg = 'config' | 'operators'

export const QueryMsg = {
  CONFIG: 'config' as QueryMsg,
  OPERATORS: 'operators' as QueryMsg
}

export interface InstantiateMsg {
  admin: string
}

export interface UpdateMergeLockMsg {
  lock: boolean
}

export interface MergeMsg {
  msg: string
}

export interface PermissionMergeMsg {
  permission_merge: string
  merge_msg: string
}

export interface UpdateOperatorsMsg {
  addrs: string[]
}
