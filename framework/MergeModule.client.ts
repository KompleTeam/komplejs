/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Binary, MergeMsg, MergeBurnMsg, QueryMsg, MigrateMsg, Addr, ResponseWrapperForConfig, Config, ResponseWrapperForArrayOfString } from "./MergeModule.types";
export interface MergeModuleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ResponseWrapperForConfig>;
  operators: () => Promise<ResponseWrapperForArrayOfString>;
}
export class MergeModuleQueryClient implements MergeModuleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.operators = this.operators.bind(this);
  }

  config = async (): Promise<ResponseWrapperForConfig> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  operators = async (): Promise<ResponseWrapperForArrayOfString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      operators: {}
    });
  };
}
export interface MergeModuleInterface extends MergeModuleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateMergeLock: ({
    lock
  }: {
    lock: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  merge: ({
    msg
  }: {
    msg: MergeMsg;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  permissionMerge: ({
    mergeMsg,
    permissionMsg
  }: {
    mergeMsg: MergeMsg;
    permissionMsg: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateOperators: ({
    addrs
  }: {
    addrs: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MergeModuleClient extends MergeModuleQueryClient implements MergeModuleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateMergeLock = this.updateMergeLock.bind(this);
    this.merge = this.merge.bind(this);
    this.permissionMerge = this.permissionMerge.bind(this);
    this.updateOperators = this.updateOperators.bind(this);
  }

  updateMergeLock = async ({
    lock
  }: {
    lock: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_merge_lock: {
        lock
      }
    }, fee, memo, funds);
  };
  merge = async ({
    msg
  }: {
    msg: MergeMsg;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      merge: {
        msg
      }
    }, fee, memo, funds);
  };
  permissionMerge = async ({
    mergeMsg,
    permissionMsg
  }: {
    mergeMsg: MergeMsg;
    permissionMsg: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      permission_merge: {
        merge_msg: mergeMsg,
        permission_msg: permissionMsg
      }
    }, fee, memo, funds);
  };
  updateOperators = async ({
    addrs
  }: {
    addrs: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_operators: {
        addrs
      }
    }, fee, memo, funds);
  };
}