import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  InstantiateMsg,
  UpdateModulePermissionsMsg,
  UpdateOperatorsMsg,
  CheckMsg,
  ExecuteMsg,
  QueryMsg
} from '../types/modules/permission'
import { Modules } from '../types/shared'

export class PermissionModule extends ContractWrapper {
  constructor(
    client: SigningCosmWasmClient | null,
    signer: OfflineSigner | null,
    contractAddress?: string
  ) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { admin }: InstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(
      codeId,
      { admin },
      'Komple Framework Permission Module',
      'auto',
      options
    )
  }

  async updateModulePermissions({
    module,
    permissions
  }: UpdateModulePermissionsMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.UPDATE_MODULE_PERMISSIONS}`]: { module, permissions } },
      'auto'
    )
  }

  async updateOperators({ addrs }: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async check({ module, msg }: CheckMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.CHECK}`]: { module, msg } }, 'auto')
  }

  async getModulePermissions(module: Modules): Promise<any> {
    return super.query({ [`${QueryMsg.MODULE_PERMISSIONS}`]: module })
  }

  async getOperators(): Promise<any> {
    return super.query({ [`${QueryMsg.OPERATORS}`]: {} })
  }
}
