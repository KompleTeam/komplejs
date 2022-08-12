import { SigningCosmWasmClient, OfflineSigner } from 'cosmwasm'
import { ControllerContract, TokenContract, WhitelistContract, MetadataContract } from './contracts'
import { MintModule, MergeModule, MarketplaceModule, PermissionModule } from './modules'

interface KompleClientInterface {
  client: SigningCosmWasmClient
  signer: OfflineSigner

  getControllerContract: (contractAddress?: string) => ControllerContract
  getTokenContract: (contractAddress?: string) => TokenContract
  getWhitelistContract: (contractAddress?: string) => WhitelistContract
  getMetadataContract: (contractAddress?: string) => MetadataContract

  getMintModule: (contractAddress?: string) => MintModule
  getMergeModule: (contractAddress?: string) => MergeModule
  getMarketplaceModule: (contractAddress?: string) => MarketplaceModule
  getPermissionModule: (contractAddress?: string) => PermissionModule
}

export class KompleClient implements KompleClientInterface {
  client: SigningCosmWasmClient
  signer: OfflineSigner

  constructor(client: SigningCosmWasmClient, signer: OfflineSigner) {
    this.client = client
    this.signer = signer
  }

  getControllerContract(contractAddress?: string) {
    return new ControllerContract(this.client, this.signer, contractAddress)
  }

  getTokenContract(contractAddress?: string) {
    return new TokenContract(this.client, this.signer, contractAddress)
  }

  getWhitelistContract(contractAddress?: string) {
    return new WhitelistContract(this.client, this.signer, contractAddress)
  }

  getMetadataContract(contractAddress?: string) {
    return new MetadataContract(this.client, this.signer, contractAddress)
  }

  getMintModule(contractAddress?: string) {
    return new MintModule(this.client, this.signer, contractAddress)
  }

  getMergeModule(contractAddress?: string) {
    return new MergeModule(this.client, this.signer, contractAddress)
  }

  getMarketplaceModule(contractAddress?: string) {
    return new MarketplaceModule(this.client, this.signer, contractAddress)
  }

  getPermissionModule(contractAddress?: string) {
    return new PermissionModule(this.client, this.signer, contractAddress)
  }
}
