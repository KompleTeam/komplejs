/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface Metadata {
  attributes: Trait[];
  meta_info: MetaInfo;
}
export interface InstantiateMsg {
  admin: string;
  metadata_type: Metadata;
}
export type ExecuteMsg = {
  add_metadata: {
    attributes: Trait[];
    meta_info: MetaInfo;
  };
} | {
  link_metadata: {
    metadata_id?: number | null;
    token_id: number;
  };
} | {
  unlink_metadata: {
    token_id: number;
  };
} | {
  update_meta_info: {
    id: number;
    meta_info: MetaInfo;
    raw_metadata: boolean;
  };
} | {
  add_attribute: {
    attribute: Trait;
    id: number;
    raw_metadata: boolean;
  };
} | {
  update_attribute: {
    attribute: Trait;
    id: number;
    raw_metadata: boolean;
  };
} | {
  remove_attribute: {
    id: number;
    raw_metadata: boolean;
    trait_type: string;
  };
} | {
  update_operators: {
    addrs: string[];
  };
};
export interface Trait {
  trait_type: string;
  value: string;
}
export interface MetaInfo {
  animation_url?: string | null;
  description?: string | null;
  external_url?: string | null;
  image?: string | null;
  youtube_url?: string | null;
}
export type QueryMsg = {
  config: {};
} | {
  raw_metadata: {
    metadata_id: number;
  };
} | {
  metadata: {
    token_id: number;
  };
} | {
  raw_metadatas: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  metadatas: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  operators: {};
};
export interface MigrateMsg {}
export type Addr = string;
export interface ResponseWrapperForConfig {
  data: Config;
  query: string;
}
export interface Config {
  admin: Addr;
  metadata_type: Metadata;
}
export interface ResponseWrapperForMetadataResponse {
  data: MetadataResponse;
  query: string;
}
export interface MetadataResponse {
  metadata: Metadata;
  metadata_id: number;
}
export interface ResponseWrapperForArrayOfMetadataResponse {
  data: MetadataResponse[];
  query: string;
}
export interface ResponseWrapperForArrayOfString {
  data: string[];
  query: string;
}
export interface ResponseWrapperForMetadata {
  data: Metadata;
  query: string;
}