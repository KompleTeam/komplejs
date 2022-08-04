export type ExecuteMsg = 'update_merge_lock' | 'merge' | 'permission_merge' | 'update_operators'

export type QueryMsg = 'config' | 'operators'

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
