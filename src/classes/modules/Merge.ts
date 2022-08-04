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
  UpdateOperatorsMsg
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
    return super.execute({ lock }, 'auto')
  }

  async merge({ msg }: MergeMsg): Promise<ExecuteResult> {
    return super.execute({ msg }, 'auto')
  }

  async permissionMerge({
    permission_merge,
    merge_msg
  }: PermissionMergeMsg): Promise<ExecuteResult> {
    return super.execute({ permission_merge, merge_msg }, 'auto')
  }

  async updateOperators(msg: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ config: {} })
  }

  async getOperators(): Promise<any> {
    return super.query({ operators: {} })
  }
}
