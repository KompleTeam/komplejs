import { contracts } from "./ts-files";
import { SigningCosmWasmClient, toBinary } from "@cosmjs/cosmwasm-stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { HubInfo } from "./ts-files/HubModule.types";
import { CollectionFundInfo } from "./ts-files/MintModule.types";
import {
  CollectionConfig,
  Collections,
  Metadata,
  MetadataInfo,
  TokenInfo,
} from "./ts-files/TokenModule.types";
import { WhitelistConfig } from "./ts-files/WhitelistModule.types";

interface KompleClientInterface {
  client: SigningCosmWasmClient;
  signer: OfflineSigner;
}

export class KompleClient implements KompleClientInterface {
  client: SigningCosmWasmClient;
  signer: OfflineSigner;

  constructor(client: SigningCosmWasmClient, signer: OfflineSigner) {
    this.client = client;
    this.signer = signer;
  }

  async getAccount() {
    return (await this.signer.getAccounts())[0];
  }

  async feeModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(account.address, codeId, msg, "Komple Fee Module", "auto", {
          admin: setContractAdmin ? account.address : undefined,
        });
      },
      client: new contracts.FeeModule.FeeModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.FeeModule.FeeModuleQueryClient(this.client, contractAddress),
    };
  }

  async hubModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        hubInfo,
        marbuFeeModule,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        hubInfo: HubInfo;
        marbuFeeModule?: string;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = {
          admin,
          data: toBinary({ hub_info: hubInfo, marbu_fee_module: marbuFeeModule }),
        };
        return this.client.instantiate(account.address, codeId, msg, "Komple Hub Module", "auto", {
          admin: setContractAdmin ? account.address : undefined,
        });
      },
      client: new contracts.HubModule.HubModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.HubModule.HubModuleQueryClient(this.client, contractAddress),
    };
  }

  async marketplaceModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        fundInfo,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        fundInfo: CollectionFundInfo;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin, data: toBinary({ fund_info: fundInfo }) };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Marketplace Module",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.MarketplaceModule.MarketplaceModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.MarketplaceModule.MarketplaceModuleQueryClient(
        this.client,
        contractAddress
      ),
    };
  }

  async mergeModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Merge Module",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.MergeModule.MergeModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.MergeModule.MergeModuleQueryClient(this.client, contractAddress),
    };
  }

  async metadataModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        metadataType,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        metadataType: Metadata;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin, data: toBinary({ metadata_type: metadataType }) };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Metadata Module",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.MetadataModule.MetadataModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.MetadataModule.MetadataModuleQueryClient(
        this.client,
        contractAddress
      ),
    };
  }

  async mintModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(account.address, codeId, msg, "Komple Mint Module", "auto", {
          admin: setContractAdmin ? account.address : undefined,
        });
      },
      client: new contracts.MintModule.MintModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.MintModule.MintModuleQueryClient(this.client, contractAddress),
    };
  }

  async permissionModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Permission Module",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.PermissionModule.PermissionModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.PermissionModule.PermissionModuleQueryClient(
        this.client,
        contractAddress
      ),
    };
  }

  async tokenModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        creator,
        tokenInfo,
        collectionName,
        collectionType,
        collectionConfig,
        metadataInfo,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        creator: string;
        tokenInfo: TokenInfo;
        collectionName: string;
        collectionType: Collections;
        collectionConfig: CollectionConfig;
        metadataInfo: MetadataInfo;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = {
          admin,
          data: toBinary({
            creator,
            token_info: tokenInfo,
            collection_name: collectionName,
            collection_type: collectionType,
            collection_config: collectionConfig,
            metadata_info: metadataInfo,
          }),
        };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Token Module",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.TokenModule.TokenModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.TokenModule.TokenModuleQueryClient(this.client, contractAddress),
    };
  }

  async whitelistModule(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        members,
        config,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        members: string[];
        config: WhitelistConfig;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin, data: toBinary({ members, config }) };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Whitelist Module",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.WhitelistModule.WhitelistModuleClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.WhitelistModule.WhitelistModuleQueryClient(
        this.client,
        contractAddress
      ),
    };
  }

  async attributePermission(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Attribute Permission",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.AttributePermission.AttributePermissionClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.AttributePermission.AttributePermissionQueryClient(
        this.client,
        contractAddress
      ),
    };
  }

  async linkPermission(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Link Permission",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.LinkPermission.LinkPermissionClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.LinkPermission.LinkPermissionQueryClient(
        this.client,
        contractAddress
      ),
    };
  }

  async ownershipPermission(contractAddress: string) {
    let account = await this.getAccount();
    return {
      instantiate: async ({
        codeId,
        admin = account.address,
        setContractAdmin = false,
      }: {
        codeId: number;
        admin?: string;
        setContractAdmin?: boolean;
      }) => {
        const msg = { admin };
        return this.client.instantiate(
          account.address,
          codeId,
          msg,
          "Komple Ownership Permission",
          "auto",
          {
            admin: setContractAdmin ? account.address : undefined,
          }
        );
      },
      client: new contracts.OwnershipPermission.OwnershipPermissionClient(
        this.client,
        account.address,
        contractAddress
      ),
      queryClient: new contracts.OwnershipPermission.OwnershipPermissionQueryClient(
        this.client,
        contractAddress
      ),
    };
  }
}
