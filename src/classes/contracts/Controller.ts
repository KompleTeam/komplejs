import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  StdFee
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import { MODULES } from '../../types'
import {
  InstantiateMsg,
  InitModuleMsg,
  InitMarketplaceModuleMsg
} from '../../types/contracts/controller'

const CODE_ID = 1

export class ControllerContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { name, description, image, external_link }: InstantiateMsg,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(
      CODE_ID,
      { name, description, image, external_link },
      'Rift Framework Controller Contract',
      fee,
      options
    )
  }

  async initMintModule(msg: InitModuleMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async initMergeModule(msg: InitModuleMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async initPermissionModule(msg: InitModuleMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async initMarketplaceModule(msg: InitMarketplaceModuleMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ config: {} })
  }

  async getControllerInfo(): Promise<any> {
    return super.query({ controller_info: {} })
  }

  async getModuleAddress(module: MODULES): Promise<any> {
    return super.query({ module_address: module })
  }
}
