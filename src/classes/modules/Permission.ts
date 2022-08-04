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
  UpdateModulePermissionsMsg,
  UpdateOperatorsMsg,
  CheckMsg
} from '../../types/modules/permission'
import { Modules } from '../../types/shared'

const CODE_ID = 1

export class PermissionModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { admin }: InstantiateMsg,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(CODE_ID, { admin }, 'Rift Framework Permission Module', fee, options)
  }

  async updateModulePermissions({
    module,
    permissions
  }: UpdateModulePermissionsMsg): Promise<ExecuteResult> {
    return super.execute({ module, permissions }, 'auto')
  }

  async updateOperators({ addrs }: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ addrs }, 'auto')
  }

  async check({ module, msg }: CheckMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        module,
        msg
      },
      'auto'
    )
  }

  async getModulePermissions(module: Modules): Promise<any> {
    return super.query({ module_permissions: module })
  }

  async getOperators(): Promise<any> {
    return super.query({ operators: {} })
  }
}
