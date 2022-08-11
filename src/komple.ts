import { SigningCosmWasmClient, OfflineSigner } from 'cosmwasm'
import { ControllerContract, TokenContract, WhitelistContract } from './contracts'
import { MintModule, MergeModule, MarketplaceModule, PermissionModule } from './modules'

interface KompleClientInterface {
  client: SigningCosmWasmClient
  signer: OfflineSigner

  getControllerContract: (contractAddress?: string) => ControllerContract
  getTokenContract: (contractAddress?: string) => TokenContract
  getWhitelistContract: (contractAddress?: string) => WhitelistContract

  getMintModule: (contractAddress?: string) => MintModule
  getMergeModule: (contractAddress?: string) => MergeModule
  getMarketplaceModule: (contractAddress?: string) => MarketplaceModule
  getPermissionModule: (contractAddress?: string) => PermissionModule
}

export class KompleClient implements KompleClientInterface {
  private _client: SigningCosmWasmClient
  private _signer: OfflineSigner

  constructor(client: SigningCosmWasmClient, signer: OfflineSigner) {
    this._client = client
    this._signer = signer
  }

  get client() {
    return this._client
  }

  set client(client: SigningCosmWasmClient) {
    this._client = client
  }

  get signer() {
    return this._signer
  }

  set signer(signer: OfflineSigner) {
    this._signer = signer
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
