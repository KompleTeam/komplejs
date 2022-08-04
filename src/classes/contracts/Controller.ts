import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import { MODULES } from '../../types'
import {
  InstantiateMsg,
  InitModuleMsg,
  InitMarketplaceModuleMsg,
  ExecuteMsg,
  QueryMsg
} from '../../types/contracts/controller'

const CODE_ID = 1

export class ControllerContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { name, description, image, external_link }: InstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(
      CODE_ID,
      { name, description, image, external_link },
      'Komple Framework Controller Contract',
      'auto',
      options
    )
  }

  async initMintModule({ code_id }: InitModuleMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.INIT_MINT_MODULE}`]: { code_id } }, 'auto')
  }

  async initMergeModule({ code_id }: InitModuleMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.INIT_MERGE_MODULE}`]: { code_id } }, 'auto')
  }

  async initPermissionModule({ code_id }: InitModuleMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.INIT_PERMISSION_MODULE}`]: { code_id } }, 'auto')
  }

  async initMarketplaceModule({
    code_id,
    native_denom
  }: InitMarketplaceModuleMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.INIT_MARKETPLACE_MODULE}`]: { code_id, native_denom } },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${QueryMsg.CONFIG}`]: {} })
  }

  async getControllerInfo(): Promise<any> {
    return super.query({ [`${QueryMsg.CONTROLLER_INFO}`]: {} })
  }

  async getModuleAddress(module: MODULES): Promise<any> {
    return super.query({ [`${QueryMsg.MODULE_ADDRESS}`]: module })
  }
}
