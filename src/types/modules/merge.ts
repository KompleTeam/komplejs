export type ExecuteMsg = 'update_merge_lock' | 'merge' | 'permission_merge' | 'update_operators'

export const ExecuteMsg = {
  UPDATE_MERGE_LOCK: 'update_merge_lock',
  MERGE: 'merge',
  PERMISSION_MERGE: 'permission_merge',
  UPDATE_OPERATORS: 'update_operators'
}

export type QueryMsg = 'config' | 'operators'

export const QueryMsg = {
  CONFIG: 'config',
  OPERATORS: 'operators'
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
