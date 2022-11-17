import { contracts } from './ts-files'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { OfflineSigner } from '@cosmjs/proto-signing'

interface KompleClientInterface {
    client: SigningCosmWasmClient
    signer: OfflineSigner
}

export class KompleClient implements KompleClientInterface {
    client: SigningCosmWasmClient
    signer: OfflineSigner

    constructor(client: SigningCosmWasmClient, signer: OfflineSigner) {
        this.client = client
        this.signer = signer
    }

    async getAccount() {
        return (await this.signer.getAccounts())[0]
    }

    async feeModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.FeeModule.FeeModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.FeeModule.FeeModuleQueryClient(this.client, contractAddress),
        }
    }

    async hubModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.HubModule.HubModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.HubModule.HubModuleQueryClient(this.client, contractAddress),
        }
    }

    async marketplaceModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.MarketplaceModule.MarketplaceModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.MarketplaceModule.MarketplaceModuleQueryClient(this.client, contractAddress),
        }
    }

    async mergeModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.MergeModule.MergeModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.MergeModule.MergeModuleQueryClient(this.client, contractAddress),
        }
    }

    async metadataModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.MetadataModule.MetadataModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.MetadataModule.MetadataModuleQueryClient(this.client, contractAddress),
        }
    }

    async mintModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.MintModule.MintModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.MintModule.MintModuleQueryClient(this.client, contractAddress),
        }
    }

    async permissionModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.PermissionModule.PermissionModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.PermissionModule.PermissionModuleQueryClient(this.client, contractAddress),
        }
    }

    async tokenModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.TokenModule.TokenModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.TokenModule.TokenModuleQueryClient(this.client, contractAddress),
        }
    }

    async whitelistModule(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.WhitelistModule.WhitelistModuleClient(this.client, account.address, contractAddress),
            queryClient: new contracts.WhitelistModule.WhitelistModuleQueryClient(this.client, contractAddress),
        }
    }

    async attributePermission(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.AttributePermission.AttributePermissionClient(this.client, account.address, contractAddress),
            queryClient: new contracts.AttributePermission.AttributePermissionQueryClient(this.client, contractAddress),
        }
    }

    async linkPermission(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.LinkPermission.LinkPermissionClient(this.client, account.address, contractAddress),
            queryClient: new contracts.LinkPermission.LinkPermissionQueryClient(this.client, contractAddress),
        }
    }

    async ownershipPermission(contractAddress: string){
        let account = await this.getAccount()
        return {
            client: new contracts.OwnershipPermission.OwnershipPermissionClient(this.client, account.address, contractAddress),
            queryClient: new contracts.OwnershipPermission.OwnershipPermissionQueryClient(this.client, contractAddress),
        }
    }
}