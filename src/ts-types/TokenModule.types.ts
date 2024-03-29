/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Timestamp = Uint64;
export type Uint64 = string;
export type Collections = "standard" | "komple";
export type Metadata = "standard" | "shared" | "dynamic";
export interface InstantiateMsg {
  config: WhitelistConfig;
  members: string[];
}
export interface CollectionConfig {
  ipfs_link?: string | null;
  max_token_limit?: number | null;
  per_address_limit?: number | null;
  start_time?: Timestamp | null;
}
export interface MetadataInfo {
  code_id: number;
  instantiate_msg: InstantiateMsg1;
}
export interface InstantiateMsg1 {
  metadata_type: Metadata;
}
export interface TokenInfo {
  minter: string;
  symbol: string;
}
export type ExecuteMsg = {
  transfer_nft: {
    recipient: string;
    token_id: string;
  };
} | {
  send_nft: {
    contract: string;
    msg: Binary;
    token_id: string;
  };
} | {
  mint: {
    metadata_id?: number | null;
    owner: string;
  };
} | {
  burn: {
    token_id: string;
  };
} | {
  update_module_operators: {
    addrs: string[];
  };
} | {
  admin_transfer_nft: {
    recipient: string;
    token_id: string;
  };
} | {
  update_locks: {
    locks: Locks;
  };
} | {
  update_token_locks: {
    locks: Locks;
    token_id: string;
  };
} | {
  update_collection_config: {
    collection_config: CollectionConfig;
  };
} | {
  init_whitelist_contract: {
    code_id: number;
    instantiate_msg: InstantiateMsg;
  };
};
export type Binary = string;
export interface Locks {
  burn_lock: boolean;
  mint_lock: boolean;
  send_lock: boolean;
  transfer_lock: boolean;
}
export interface WhitelistConfig {
  end_time: Timestamp;
  member_limit: number;
  per_address_limit: number;
  start_time: Timestamp;
}
export type QueryMsg = {
  locks: {};
} | {
  token_locks: {
    token_id: string;
  };
} | {
  minted_tokens_per_address: {
    address: string;
  };
} | {
  sub_modules: {};
} | {
  config: {};
} | {
  module_operators: {};
};
export interface MigrateMsg {}
export type Addr = string;
export interface ResponseWrapperForConfig {
  data: Config;
  query: string;
}
export interface Config {
  admin: Addr;
  creator: Addr;
  ipfs_link?: string | null;
  max_token_limit?: number | null;
  per_address_limit?: number | null;
  start_time?: Timestamp | null;
}
export interface ResponseWrapperForLocks {
  data: Locks;
  query: string;
}
export interface ResponseWrapperForUint32 {
  data: number;
  query: string;
}
export interface ResponseWrapperForArrayOfString {
  data: string[];
  query: string;
}
export interface ResponseWrapperForSubModules {
  data: SubModules;
  query: string;
}
export interface SubModules {
  metadata?: Addr | null;
  whitelist?: Addr | null;
}