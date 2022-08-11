import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import { MODULES } from '../types'
import {
  ControllerContractExecuteMsg,
  ControllerContractInstantiateMsg,
  ControllerContractQueryMsg,
  ControllerContractInitMarketplaceModuleMsg,
  ControllerContractInitModuleMsg
} from '../types/contracts/controller'

export class ControllerContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { name, description, image, external_link }: ControllerContractInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { name, description, image, external_link },
      'Komple Framework Controller Contract',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async initMintModule({ code_id }: ControllerContractInitModuleMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ControllerContractExecuteMsg.INIT_MINT_MODULE}`]: { code_id } },
      'auto'
    )
  }

  async initMergeModule({ code_id }: ControllerContractInitModuleMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ControllerContractExecuteMsg.INIT_MERGE_MODULE}`]: { code_id } },
      'auto'
    )
  }

  async initPermissionModule({ code_id }: ControllerContractInitModuleMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ControllerContractExecuteMsg.INIT_PERMISSION_MODULE}`]: { code_id } },
      'auto'
    )
  }

  async initMarketplaceModule({
    code_id,
    native_denom
  }: ControllerContractInitMarketplaceModuleMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ControllerContractExecuteMsg.INIT_MARKETPLACE_MODULE}`]: { code_id, native_denom } },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${ControllerContractQueryMsg.CONFIG}`]: {} })
  }

  async getControllerInfo(): Promise<any> {
    return super.query({ [`${ControllerContractQueryMsg.CONTROLLER_INFO}`]: {} })
  }

  async getModuleAddress(module: MODULES): Promise<any> {
    return super.query({ [`${ControllerContractQueryMsg.MODULE_ADDRESS}`]: module })
  }
}
