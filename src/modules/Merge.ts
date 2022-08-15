import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  toBase64,
  toUtf8
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  MergeModuleInstantiateMsg,
  MergeModuleUpdateMergeLockMsg,
  MergeModuleMergeMsg,
  MergeModulePermissionMergeMsg,
  MergeModuleUpdateOperatorsMsg,
  MergeModuleExecuteMsg,
  MergeModuleQueryMsg
} from '../types/modules/merge'

export class MergeModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { admin }: MergeModuleInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { admin },
      'Komple Framework Merge Module',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async updateMergeLock({ lock }: MergeModuleUpdateMergeLockMsg): Promise<ExecuteResult> {
    return super.execute({ [`${MergeModuleExecuteMsg.UPDATE_MERGE_LOCK}`]: { lock } }, 'auto')
  }

  async merge({ msg }: MergeModuleMergeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MergeModuleExecuteMsg.MERGE}`]: { msg: toBase64(toUtf8(JSON.stringify(msg))) } },
      'auto'
    )
  }

  async permissionMerge({
    permission_msg,
    merge_msg
  }: MergeModulePermissionMergeMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${MergeModuleExecuteMsg.PERMISSION_MERGE}`]: {
          permission_msg: toBase64(toUtf8(JSON.stringify(permission_msg))),
          merge_msg: toBase64(toUtf8(JSON.stringify(merge_msg)))
        }
      },
      'auto'
    )
  }

  async updateOperators({ addrs }: MergeModuleUpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${MergeModuleExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${MergeModuleQueryMsg.CONFIG}`]: {} })
  }

  async getOperators(): Promise<any> {
    return super.query({ [`${MergeModuleQueryMsg.OPERATORS}`]: {} })
  }
}
