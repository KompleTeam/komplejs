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
  CreateCollectionMsg,
  UpdatePublicCollectionCreation,
  UpdateMintLockMsg,
  MintMsg,
  MintToMsg,
  PermissionMintMsg,
  UpdateOperatorsMsg,
  UpdateLinkedCollections,
  ExecuteMsg,
  QueryMsg
} from '../types/modules/mint'
import { Collections } from '../types/shared'

export class MintModule extends ContractWrapper {
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
    return super.instantiate(codeId, { admin }, 'Komple Framework Mint Module', 'auto', options)
  }

  async createCollection({
    code_id,
    collection_info,
    token_info,
    per_address_limit,
    start_time,
    unit_price,
    native_denom,
    linked_collections
  }: CreateCollectionMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${ExecuteMsg.CREATE_COLLECTION}`]: {
          code_id,
          collection_info,
          token_info,
          per_address_limit,
          start_time,
          unit_price,
          native_denom,
          linked_collections
        }
      },
      'auto'
    )
  }

  async updatePublicCollectionCreation({
    public_collection_creation
  }: UpdatePublicCollectionCreation): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.UPDATE_PUBLIC_COLLECTION_CREATION}`]: { public_collection_creation } },
      'auto'
    )
  }

  async updateMintLock({ lock }: UpdateMintLockMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_MINT_LOCK}`]: { lock } }, 'auto')
  }

  async mint({ collection_id }: MintMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.MINT}`]: { collection_id } }, 'auto')
  }

  async mintTo({ collection_id, recipient }: MintToMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.MINT_TO}`]: { collection_id, recipient } }, 'auto')
  }

  async permissionMint({
    permission_msg,
    collection_ids
  }: PermissionMintMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.PERMISSION_MINT}`]: { permission_msg, collection_ids } },
      'auto'
    )
  }

  async updateOperators({ addrs }: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async updateLinkedCollections({
    collection_id,
    linked_collections
  }: UpdateLinkedCollections): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.UPDATE_LINKED_COLLECTIONS}`]: { collection_id, linked_collections } },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${QueryMsg.CONFIG}`]: {} })
  }

  async getCollectionAddres(collectionId: number): Promise<any> {
    return super.query({ [`${QueryMsg.COLLECTION_ADDRESS}`]: collectionId })
  }

  async getOperators(): Promise<any> {
    return super.query({ [`${QueryMsg.OPERATORS}`]: {} })
  }

  async getCollectionTypes(collection: Collections): Promise<any> {
    return super.query({ [`${QueryMsg.COLLECTION_TYPES}`]: collection })
  }

  async getLinkedCollections(collectionId: number): Promise<any> {
    return super.query({ [`${QueryMsg.LINKED_COLLECTIONS}`]: { collection_id: collectionId } })
  }
}
