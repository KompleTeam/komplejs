import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {
  Timestamp,
  Uint64,
  Collections,
  Metadata,
  InstantiateMsg,
  CollectionConfig,
  MetadataInfo,
  InstantiateMsg1,
  TokenInfo,
  ExecuteMsg,
  Binary,
  Locks,
  WhitelistConfig,
  QueryMsg,
  MigrateMsg,
  Addr,
  ResponseWrapperForConfig,
  Config,
  ResponseWrapperForLocks,
  ResponseWrapperForUint32,
  ResponseWrapperForArrayOfString,
  ResponseWrapperForSubModules,
  SubModules,
} from "../ts-types/TokenModule.types";
import { TokenModuleReadOnlyInterface } from "../ts-types/TokenModule.client";

export type Expiration = { at_height: number } | { at_time: Timestamp } | { never: {} };

export interface CustomTokenModuleReadOnlyInterface extends TokenModuleReadOnlyInterface {
  ownerOf: ({
    tokenId,
    includeExpired,
  }: {
    tokenId: string;
    includeExpired?: boolean;
  }) => Promise<any>;
  approval: ({
    tokenId,
    spender,
    includeExpired,
  }: {
    tokenId: string;
    spender: string;
    includeExpired?: boolean;
  }) => Promise<any>;
  approvals: ({
    tokenId,
    includeExpired,
  }: {
    tokenId: string;
    includeExpired?: boolean;
  }) => Promise<any>;
  allOperators: ({
    owner,
    includeExpired,
    startAfter,
    limit,
  }: {
    owner: string;
    includeExpired?: boolean;
    startAfter?: string;
    limit?: number;
  }) => Promise<any>;
  numTokens: () => Promise<any>;
  contractInfo: () => Promise<any>;
  nftInfo: ({ tokenId }: { tokenId: string }) => Promise<any>;
  allNtfInfo: ({
    tokenId,
    includeExpired,
  }: {
    tokenId: string;
    includeExpired?: boolean;
  }) => Promise<any>;
  tokens: ({
    owner,
    startAfter,
    limit,
  }: {
    owner: string;
    startAfter?: string;
    limit?: number;
  }) => Promise<any>;
  allTokens: ({ startAfter, limit }: { startAfter?: string; limit?: number }) => Promise<any>;
  minter: () => Promise<any>;
}

export class TokenModuleQueryClient implements CustomTokenModuleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.ownerOf = this.ownerOf.bind(this);
    this.approval = this.approval.bind(this);
    this.approvals = this.approvals.bind(this);
    this.allOperators = this.allOperators.bind(this);
    this.numTokens = this.numTokens.bind(this);
    this.contractInfo = this.contractInfo.bind(this);
    this.nftInfo = this.nftInfo.bind(this);
    this.allNtfInfo = this.allNtfInfo.bind(this);
    this.tokens = this.tokens.bind(this);
    this.allTokens = this.allTokens.bind(this);
    this.minter = this.minter.bind(this);
    this.locks = this.locks.bind(this);
    this.tokenLocks = this.tokenLocks.bind(this);
    this.mintedTokensPerAddress = this.mintedTokensPerAddress.bind(this);
    this.subModules = this.subModules.bind(this);
    this.config = this.config.bind(this);
    this.moduleOperators = this.moduleOperators.bind(this);
  }

  ownerOf = async ({
    tokenId,
    includeExpired,
  }: {
    tokenId: string;
    includeExpired?: boolean | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner_of: { token_id: tokenId, include_expired: includeExpired },
    });
  };
  approval = async ({
    tokenId,
    spender,
    includeExpired,
  }: {
    tokenId: string;
    spender: string;
    includeExpired?: boolean | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approval: { token_id: tokenId, spender: spender, include_expired: includeExpired },
    });
  };
  approvals = async ({
    tokenId,
    includeExpired,
  }: {
    tokenId: string;
    includeExpired?: boolean | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approvals: { token_id: tokenId, include_expired: includeExpired },
    });
  };
  allOperators = async ({
    owner,
    includeExpired,
    startAfter,
    limit,
  }: {
    owner: string;
    includeExpired?: boolean | undefined;
    startAfter?: string | undefined;
    limit?: number | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_operators: {
        owner: owner,
        include_expired: includeExpired,
        start_after: startAfter,
        limit: limit,
      },
    });
  };
  numTokens = async (): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, { num_tokens: {} });
  };
  contractInfo = async (): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, { contract_info: {} });
  };
  nftInfo = async ({ tokenId }: { tokenId: string }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_info: { token_id: tokenId },
    });
  };
  allNtfInfo = async ({
    tokenId,
    includeExpired,
  }: {
    tokenId: string;
    includeExpired?: boolean | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_ntf_info: { token_id: tokenId, include_expired: includeExpired },
    });
  };
  tokens = async ({
    owner,
    startAfter,
    limit,
  }: {
    owner: string;
    startAfter?: string | undefined;
    limit?: number | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      tokens: { owner: owner, start_after: startAfter, limit: limit },
    });
  };
  allTokens = async ({
    startAfter,
    limit,
  }: {
    startAfter?: string | undefined;
    limit?: number | undefined;
  }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_tokens: { start_after: startAfter, limit: limit },
    });
  };
  minter = async (): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, { minter: {} });
  };
  locks = async (): Promise<ResponseWrapperForLocks> => {
    return this.client.queryContractSmart(this.contractAddress, {
      extension: { msg: { locks: {} } },
    });
  };
  tokenLocks = async ({ tokenId }: { tokenId: string }): Promise<ResponseWrapperForLocks> => {
    return this.client.queryContractSmart(this.contractAddress, {
      extension: {
        msg: {
          token_locks: {
            token_id: tokenId,
          },
        },
      },
    });
  };
  mintedTokensPerAddress = async ({
    address,
  }: {
    address: string;
  }): Promise<ResponseWrapperForUint32> => {
    return this.client.queryContractSmart(this.contractAddress, {
      extension: {
        msg: {
          minted_tokens_per_address: {
            address,
          },
        },
      },
    });
  };
  subModules = async (): Promise<ResponseWrapperForSubModules> => {
    return this.client.queryContractSmart(this.contractAddress, {
      extension: {
        msg: {
          sub_modules: {},
        },
      },
    });
  };
  config = async (): Promise<ResponseWrapperForConfig> => {
    return this.client.queryContractSmart(this.contractAddress, {
      extension: {
        msg: {
          config: {},
        },
      },
    });
  };
  moduleOperators = async (): Promise<ResponseWrapperForArrayOfString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      extension: {
        msg: {
          module_operators: {},
        },
      },
    });
  };
}
export interface TokenModuleInterface extends CustomTokenModuleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  approve: (
    {
      spender,
      tokenId,
      expires,
    }: {
      spender: string;
      tokenId: string;
      expires?: Expiration;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  revoke: (
    {
      spender,
      tokenId,
    }: {
      spender: string;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  approveAll: (
    {
      operator,
      expires,
    }: {
      operator: string;
      expires?: Expiration;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  revokeAll: (
    {
      operator,
    }: {
      operator: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  transferNft: (
    {
      recipient,
      tokenId,
    }: {
      recipient: string;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  sendNft: (
    {
      contract,
      msg,
      tokenId,
    }: {
      contract: string;
      msg: Binary;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  mint: (
    {
      metadataId,
      owner,
    }: {
      metadataId?: number;
      owner: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  burn: (
    {
      tokenId,
    }: {
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  updateModuleOperators: (
    {
      addrs,
    }: {
      addrs: string[];
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  adminTransferNft: (
    {
      recipient,
      tokenId,
    }: {
      recipient: string;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  updateLocks: (
    {
      locks,
    }: {
      locks: Locks;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  updateTokenLocks: (
    {
      locks,
      tokenId,
    }: {
      locks: Locks;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  updateCollectionConfig: (
    {
      collectionConfig,
    }: {
      collectionConfig: CollectionConfig;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  initWhitelistContract: (
    {
      codeId,
      instantiateMsg,
    }: {
      codeId: number;
      instantiateMsg: InstantiateMsg;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
}
export class TokenModuleClient extends TokenModuleQueryClient implements TokenModuleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.updateModuleOperators = this.updateModuleOperators.bind(this);
    this.adminTransferNft = this.adminTransferNft.bind(this);
    this.updateLocks = this.updateLocks.bind(this);
    this.updateTokenLocks = this.updateTokenLocks.bind(this);
    this.updateCollectionConfig = this.updateCollectionConfig.bind(this);
    this.initWhitelistContract = this.initWhitelistContract.bind(this);
  }

  approve = async (
    {
      spender,
      tokenId,
      expires,
    }: {
      spender: string;
      tokenId: string;
      expires?: Expiration;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        approve: {
          spender,
          token_id: tokenId,
          expires,
        },
      },
      fee,
      memo,
      funds
    );
  };
  revoke = async (
    {
      spender,
      tokenId,
    }: {
      spender: string;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        revoke: {
          spender,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  approveAll = async (
    {
      operator,
      expires,
    }: {
      operator: string;
      expires?: Expiration;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        approve_all: {
          operator,
          expires,
        },
      },
      fee,
      memo,
      funds
    );
  };
  revokeAll = async (
    {
      operator,
    }: {
      operator: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        revoke_all: {
          operator,
        },
      },
      fee,
      memo,
      funds
    );
  };
  transferNft = async (
    {
      recipient,
      tokenId,
    }: {
      recipient: string;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            transfer_nft: {
              recipient,
              token_id: tokenId,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  sendNft = async (
    {
      contract,
      msg,
      tokenId,
    }: {
      contract: string;
      msg: Binary;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            send_nft: {
              contract,
              msg,
              token_id: tokenId,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  mint = async (
    {
      metadataId,
      owner,
    }: {
      metadataId?: number;
      owner: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            mint: {
              metadata_id: metadataId,
              owner,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  burn = async (
    {
      tokenId,
    }: {
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          burn: {
            token_id: tokenId,
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  updateModuleOperators = async (
    {
      addrs,
    }: {
      addrs: string[];
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            update_module_operators: {
              addrs,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  adminTransferNft = async (
    {
      recipient,
      tokenId,
    }: {
      recipient: string;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            admin_transfer_nft: {
              recipient,
              token_id: tokenId,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  updateLocks = async (
    {
      locks,
    }: {
      locks: Locks;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            update_locks: {
              locks,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  updateTokenLocks = async (
    {
      locks,
      tokenId,
    }: {
      locks: Locks;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            update_token_locks: {
              locks,
              token_id: tokenId,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  updateCollectionConfig = async (
    {
      collectionConfig,
    }: {
      collectionConfig: CollectionConfig;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            update_collection_config: {
              collection_config: collectionConfig,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
  initWhitelistContract = async (
    {
      codeId,
      instantiateMsg,
    }: {
      codeId: number;
      instantiateMsg: InstantiateMsg;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg: {
            init_whitelist_contract: {
              code_id: codeId,
              instantiate_msg: instantiateMsg,
            },
          },
        },
      },
      fee,
      memo,
      funds
    );
  };
}
