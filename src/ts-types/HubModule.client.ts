/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Binary, InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ResponseWrapperForConfigResponse, ConfigResponse, HubInfo, ResponseWrapperForString, ResponseWrapperForArrayOfString } from "./HubModule.types";
export interface HubModuleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ResponseWrapperForConfigResponse>;
  moduleAddress: ({
    module
  }: {
    module: string;
  }) => Promise<ResponseWrapperForString>;
  operators: () => Promise<ResponseWrapperForArrayOfString>;
}
export class HubModuleQueryClient implements HubModuleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.moduleAddress = this.moduleAddress.bind(this);
    this.operators = this.operators.bind(this);
  }

  config = async (): Promise<ResponseWrapperForConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  moduleAddress = async ({
    module
  }: {
    module: string;
  }): Promise<ResponseWrapperForString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      module_address: {
        module
      }
    });
  };
  operators = async (): Promise<ResponseWrapperForArrayOfString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      operators: {}
    });
  };
}
export interface HubModuleInterface extends HubModuleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  registerModule: ({
    codeId,
    module,
    msg
  }: {
    codeId: number;
    module: string;
    msg?: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateHubInfo: ({
    description,
    externalLink,
    image,
    name
  }: {
    description: string;
    externalLink?: string;
    image: string;
    name: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  deregisterModule: ({
    module
  }: {
    module: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateOperators: ({
    addrs
  }: {
    addrs: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  migrateContracts: ({
    codeId,
    contractAddress,
    msg
  }: {
    codeId: number;
    contractAddress: string;
    msg: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class HubModuleClient extends HubModuleQueryClient implements HubModuleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.registerModule = this.registerModule.bind(this);
    this.updateHubInfo = this.updateHubInfo.bind(this);
    this.deregisterModule = this.deregisterModule.bind(this);
    this.updateOperators = this.updateOperators.bind(this);
    this.migrateContracts = this.migrateContracts.bind(this);
  }

  registerModule = async ({
    codeId,
    module,
    msg
  }: {
    codeId: number;
    module: string;
    msg?: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      register_module: {
        code_id: codeId,
        module,
        msg
      }
    }, fee, memo, funds);
  };
  updateHubInfo = async ({
    description,
    externalLink,
    image,
    name
  }: {
    description: string;
    externalLink?: string;
    image: string;
    name: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_hub_info: {
        description,
        external_link: externalLink,
        image,
        name
      }
    }, fee, memo, funds);
  };
  deregisterModule = async ({
    module
  }: {
    module: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      deregister_module: {
        module
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
  migrateContracts = async ({
    codeId,
    contractAddress,
    msg
  }: {
    codeId: number;
    contractAddress: string;
    msg: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      migrate_contracts: {
        code_id: codeId,
        contract_address: contractAddress,
        msg
      }
    }, fee, memo, funds);
  };
}