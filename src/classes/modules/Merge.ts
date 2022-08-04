import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  StdFee
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  InstantiateMsg,
  UpdateMergeLockMsg,
  MergeMsg,
  PermissionMergeMsg,
  UpdateOperatorsMsg,
  ExecuteMsg,
  QueryMsg
} from '../../types/modules/merge'

const CODE_ID = 1

export class MergeModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { admin }: InstantiateMsg,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(CODE_ID, { admin }, 'Rift Framework Merge Module', fee, options)
  }

  async updateMergeLock({ lock }: UpdateMergeLockMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_MERGE_LOCK}`]: { lock } }, 'auto')
  }

  async merge({ msg }: MergeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.MERGE}`]: { msg } }, 'auto')
  }

  async permissionMerge({
    permission_merge,
    merge_msg
  }: PermissionMergeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.PERMISSION_MERGE}`]: { permission_merge, merge_msg } },
      'auto'
    )
  }

  async updateOperators(msg: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_OPERATORS}`]: { msg } }, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${QueryMsg.CONFIG}`]: {} })
  }

  async getOperators(): Promise<any> {
    return super.query({ [`${QueryMsg.OPERATORS}`]: {} })
  }
}
