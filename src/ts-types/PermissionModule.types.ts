/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Binary = string;
export interface InstantiateMsg {
  admin: string;
  data?: Binary | null;
}
export type ExecuteMsg = {
  register_permission: {
    code_id: number;
    msg?: Binary | null;
    permission: string;
  };
} | {
  update_module_permissions: {
    module: string;
    permissions: string[];
  };
} | {
  update_operators: {
    addrs: string[];
  };
} | {
  check: {
    module: string;
    msg: Binary;
  };
} | {
  lock_execute: {};
};
export type QueryMsg = {
  permission_address: {
    permission: string;
  };
} | {
  module_permissions: {
    module: string;
  };
} | {
  operators: {};
};
export interface MigrateMsg {}
export interface ResponseWrapperForArrayOfString {
  data: string[];
  query: string;
}
export interface ResponseWrapperForString {
  data: string;
  query: string;
}