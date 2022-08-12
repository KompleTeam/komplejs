import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  MintModuleInstantiateMsg,
  MintModuleCreateCollectionMsg,
  MintModuleUpdatePublicCollectionCreationMsg,
  MintModuleUpdateMintLockMsg,
  MintModuleMintMsg,
  MintModuleMintToMsg,
  MintModulePermissionMintMsg,
  MintModuleUpdateOperatorsMsg,
  MintModuleUpdateLinkedCollectionsMsg,
  MintModuleExecuteMsg,
  MintModuleQueryMsg
} from '../types/modules/mint'
import { Collections } from '../types/shared'

export class MintModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { admin }: MintModuleInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { admin },
      'Komple Framework Mint Module',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async createCollection({
    code_id,
    token_instantiate_msg,
    linked_collections
  }: MintModuleCreateCollectionMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${MintModuleExecuteMsg.CREATE_COLLECTION}`]: {
          code_id,
          token_instantiate_msg,
          linked_collections
        }
      },
      'auto'
    )
  }

  async updatePublicCollectionCreation({
    public_collection_creation
  }: MintModuleUpdatePublicCollectionCreationMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${MintModuleExecuteMsg.UPDATE_PUBLIC_COLLECTION_CREATION}`]: {
          public_collection_creation
        }
      },
      'auto'
    )
  }

  async updateMintLock({ lock }: MintModuleUpdateMintLockMsg): Promise<ExecuteResult> {
    return super.execute({ [`${MintModuleExecuteMsg.UPDATE_MINT_LOCK}`]: { lock } }, 'auto')
  }

  async mint({ collection_id }: MintModuleMintMsg): Promise<ExecuteResult> {
    return super.execute({ [`${MintModuleExecuteMsg.MINT}`]: { collection_id } }, 'auto')
  }

  async mintTo({ collection_id, recipient }: MintModuleMintToMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MintModuleExecuteMsg.MINT_TO}`]: { collection_id, recipient } },
      'auto'
    )
  }

  async permissionMint({
    permission_msg,
    collection_ids
  }: MintModulePermissionMintMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MintModuleExecuteMsg.PERMISSION_MINT}`]: { permission_msg, collection_ids } },
      'auto'
    )
  }

  async updateOperators({ addrs }: MintModuleUpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${MintModuleExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async updateLinkedCollections({
    collection_id,
    linked_collections
  }: MintModuleUpdateLinkedCollectionsMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${MintModuleExecuteMsg.UPDATE_LINKED_COLLECTIONS}`]: { collection_id, linked_collections }
      },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${MintModuleQueryMsg.CONFIG}`]: {} })
  }

  async getCollectionAddres(collectionId: number): Promise<any> {
    return super.query({ [`${MintModuleQueryMsg.COLLECTION_ADDRESS}`]: collectionId })
  }

  async getOperators(): Promise<any> {
    return super.query({ [`${MintModuleQueryMsg.OPERATORS}`]: {} })
  }

  async getCollectionTypes(collection: Collections): Promise<any> {
    return super.query({ [`${MintModuleQueryMsg.COLLECTION_TYPES}`]: collection })
  }

  async getLinkedCollections(collectionId: number): Promise<any> {
    return super.query({
      [`${MintModuleQueryMsg.LINKED_COLLECTIONS}`]: { collection_id: collectionId }
    })
  }
}
