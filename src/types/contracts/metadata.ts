import { Metadata } from '../shared'

export type MetadataContractExecuteMsg =
  | 'add_metadata'
  | 'link_metadata'
  | 'update_meta_info'
  | 'add_attribute'
  | 'update_attribute'
  | 'remove_attribute'

export const MetadataContractExecuteMsg = {
  ADD_METADATA: 'add_metadata' as MetadataContractExecuteMsg,
  LINK_METADATA: 'link_metadata' as MetadataContractExecuteMsg,
  UPDATE_META_INFO: 'update_meta_info' as MetadataContractExecuteMsg,
  ADD_ATTRIBUTE: 'add_attribute' as MetadataContractExecuteMsg,
  UPDATE_ATTRIBUTE: 'update_attribute' as MetadataContractExecuteMsg,
  REMOVE_ATTRIBUTE: 'remove_attribute' as MetadataContractExecuteMsg
}

export type MetadataContractQueryMsg =
  | 'config'
  | 'raw_metadata'
  | 'metadata'
  | 'raw_metadatas'
  | 'metadatas'

export const MetadataContractQueryMsg = {
  CONFIG: 'config' as MetadataContractQueryMsg,
  RAW_METADATA: 'raw_metadata' as MetadataContractQueryMsg,
  METADATA: 'metadata' as MetadataContractQueryMsg,
  RAW_METADATAS: 'raw_metadatas' as MetadataContractQueryMsg,
  METADATAS: 'metadatas' as MetadataContractQueryMsg
}

export interface MetadataContractInstantiateMsg {
  admin: string
  metadata_type: Metadata
}

export interface MetaInfo {
  image?: null
  external_url?: null
  description?: null
  animation_url?: null
  youtube_url?: null
}

export interface Trait {
  trait_type: string
  value: string
}

export interface MetadataContractAddMetadataMsg {
  meta_info: MetaInfo
  attributes: Trait[]
}

export interface MetadataContractLinkMetadataMsg {
  token_id: number
  metadata_id?: number
}

export interface MetadataContractUpdateMetaInfoMsg {
  token_id: number
  meta_info: MetaInfo
}

export interface MetadataContractAddAttributeMsg {
  token_id: number
  attribute: Trait
}

export interface MetadataContractUpdateAttributeMsg {
  token_id: number
  attribute: Trait
}

export interface MetadataContractRemoveAttributeMsg {
  token_id: number
  trait_type: string
}
