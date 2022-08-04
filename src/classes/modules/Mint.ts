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
  CreateCollectionMsg,
  UpdateMintLockMsg,
  MintMsg,
  MintToMsg,
  PermissionMintMsg,
  UpdateOperatorsMsg,
  UpdateLinkedCollections
} from '../../types/modules/mint'

const CODE_ID = 1

export class MintModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { admin }: InstantiateMsg,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(CODE_ID, { admin }, 'Rift Framework Mint Module', fee, options)
  }

  async createCollection(msg: CreateCollectionMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async updateMintLock({ lock }: UpdateMintLockMsg): Promise<ExecuteResult> {
    return super.execute({ lock }, 'auto')
  }

  async mint({ collection_id }: MintMsg): Promise<ExecuteResult> {
    return super.execute({ collection_id }, 'auto')
  }

  async mintTo(msg: MintToMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async permissionMint(msg: PermissionMintMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async updateOperators(msg: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute(msg, 'auto')
  }

  async updateLinkedCollections(msg: UpdateLinkedCollections): Promise<ExecuteResult> {
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
