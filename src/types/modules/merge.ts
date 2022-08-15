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

export interface MergeModuleBinaryMergeBurnMsg {
  collection_id: number
  token_id: number
}

export interface MergeModuleBinaryMergeMsg {
  mint: number[]
  burn: MergeModuleBinaryMergeBurnMsg[]
  metadata_ids?: number[]
}

export interface MergeModuleInstantiateMsg {
  admin: string
}

export interface MergeModuleUpdateMergeLockMsg {
  lock: boolean
}

export interface MergeModuleMergeMsg {
  msg: MergeModuleBinaryMergeMsg
}

export interface MergeModulePermissionMergeMsg {
  permission_msg: string
  merge_msg: MergeModuleBinaryMergeMsg
}

export interface MergeModuleUpdateOperatorsMsg {
  addrs: string[]
}
