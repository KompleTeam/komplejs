/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  admin: string;
}
export type ExecuteMsg = {
  update_merge_lock: {
    lock: boolean;
  };
} | {
  merge: {
    msg: MergeMsg;
  };
} | {
  permission_merge: {
    merge_msg: MergeMsg;
    permission_msg: Binary;
  };
} | {
  update_operators: {
    addrs: string[];
  };
};
export type Binary = string;
export interface MergeMsg {
  burn_ids: MergeBurnMsg[];
  metadata_id?: number | null;
  mint_id: number;
  recipient: string;
}
export interface MergeBurnMsg {
  collection_id: number;
  token_id: number;
}
export type QueryMsg = {
  config: {};
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
  merge_lock: boolean;
}
export interface ResponseWrapperForArrayOfString {
  data: string[];
  query: string;
}