import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  PermissionModuleInstantiateMsg,
  PermissionModuleUpdateModulePermissionsMsg,
  PermissionModuleUpdateOperatorsMsg,
  PermissionModuleCheckMsg,
  PermissionModuleExecuteMsg,
  PermissionModuleQueryMsg
} from '../types/modules/permission'
import { Modules } from '../types/shared'

export class PermissionModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { admin }: PermissionModuleInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { admin },
      'Komple Framework Permission Module',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async updateModulePermissions({
    module,
    permissions
  }: PermissionModuleUpdateModulePermissionsMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${PermissionModuleExecuteMsg.UPDATE_MODULE_PERMISSIONS}`]: { module, permissions } },
      'auto'
    )
  }

  async updateOperators({ addrs }: PermissionModuleUpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${PermissionModuleExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async check({ module, msg }: PermissionModuleCheckMsg): Promise<ExecuteResult> {
    return super.execute({ [`${PermissionModuleExecuteMsg.CHECK}`]: { module, msg } }, 'auto')
  }

  async getModulePermissions(module: Modules): Promise<any> {
    return super.query({ [`${PermissionModuleQueryMsg.MODULE_PERMISSIONS}`]: module })
  }

  async getOperators(): Promise<any> {
    return super.query({ [`${PermissionModuleQueryMsg.OPERATORS}`]: {} })
  }
}
