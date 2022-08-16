import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  MetadataContractExecuteMsg,
  MetadataContractQueryMsg,
  MetadataContractAddMetadataMsg,
  MetadataContractInstantiateMsg,
  MetadataContractLinkMetadataMsg,
  MetadataContractUnlinkMetadataMsg,
  MetadataContractUpdateMetaInfoMsg,
  MetadataContractAddAttributeMsg,
  MetadataContractUpdateAttributeMsg,
  MetadataContractRemoveAttributeMsg,
  Metadata
} from '../types'

export class MetadataContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { admin, metadata_type }: MetadataContractInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { admin, metadata_type },
      'Komple Framework Metadata Contract',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async addMetadata({
    meta_info,
    attributes
  }: MetadataContractAddMetadataMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.ADD_METADATA}`]: { meta_info, attributes } },
      'auto'
    )
  }

  async linkMetadata({
    token_id,
    metadata_id
  }: MetadataContractLinkMetadataMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.LINK_METADATA}`]: { token_id, metadata_id } },
      'auto'
    )
  }

  async unlinkMetadata({ token_id }: MetadataContractUnlinkMetadataMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.UNLINK_METADATA}`]: { token_id } },
      'auto'
    )
  }

  async updateMetaInfo({
    token_id,
    meta_info
  }: MetadataContractUpdateMetaInfoMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.UPDATE_META_INFO}`]: { token_id, meta_info } },
      'auto'
    )
  }

  async addAttribute({
    token_id,
    attribute
  }: MetadataContractAddAttributeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.ADD_ATTRIBUTE}`]: { token_id, attribute } },
      'auto'
    )
  }

  async updateAttribute({
    token_id,
    attribute
  }: MetadataContractUpdateAttributeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.UPDATE_ATTRIBUTE}`]: { token_id, attribute } },
      'auto'
    )
  }

  async removeAttribute({
    token_id,
    trait_type
  }: MetadataContractRemoveAttributeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MetadataContractExecuteMsg.REMOVE_ATTRIBUTE}`]: { token_id, trait_type } },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${MetadataContractQueryMsg.CONFIG}`]: {} })
  }

  async getRawMetadata(metadata_id: number): Promise<any> {
    return super.query({ [`${MetadataContractQueryMsg.RAW_METADATA}`]: { metadata_id } })
  }

  async getMetadata(token_id: number): Promise<any> {
    return super.query({ [`${MetadataContractQueryMsg.METADATA}`]: { token_id } })
  }

  async getRawMetadatas(start_after?: number, limit?: number): Promise<any> {
    return super.query({ [`${MetadataContractQueryMsg.RAW_METADATAS}`]: { start_after, limit } })
  }

  async getMetadatas(start_after?: number, limit?: number): Promise<any> {
    return super.query({
      [`${MetadataContractQueryMsg.METADATAS}`]: { start_after, limit }
    })
  }
}
