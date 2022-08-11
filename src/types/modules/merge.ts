export type MergeModuleExecuteMsg =
  | 'update_merge_lock'
  | 'merge'
  | 'permission_merge'
  | 'update_operators'

export const MergeModuleExecuteMsg = {
  UPDATE_MERGE_LOCK: 'update_merge_lock' as MergeModuleExecuteMsg,
  MERGE: 'merge' as MergeModuleExecuteMsg,
  PERMISSION_MERGE: 'permission_merge' as MergeModuleExecuteMsg,
  UPDATE_OPERATORS: 'update_operators' as MergeModuleExecuteMsg
}

export type MergeModuleQueryMsg = 'config' | 'operators'

export const MergeModuleQueryMsg = {
  CONFIG: 'config' as MergeModuleQueryMsg,
  OPERATORS: 'operators' as MergeModuleQueryMsg
}

export interface MergeModuleInstantiateMsg {
  admin: string
}

export interface MergeModuleUpdateMergeLockMsg {
  lock: boolean
}

export interface MergeModuleMergeMsg {
  msg: string
}

export interface MergeModulePermissionMergeMsg {
  permission_merge: string
  merge_msg: string
}

export interface MergeModuleUpdateOperatorsMsg {
  addrs: string[]
}
