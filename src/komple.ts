import { SigningCosmWasmClient, OfflineSigner, setupWebKeplr } from 'cosmwasm'

import { ControllerContract, TokenContract } from './classes/contracts'
import { MintModule, MergeModule, MarketplaceModule, PermissionModule } from './classes/modules'

interface KompleClientInterface {
  client: SigningCosmWasmClient | null
  signer: OfflineSigner | null

  setupSigningClient: (endpoint: string, signer: OfflineSigner) => Promise<void>
  setupKeplrClient: (config: any) => Promise<void>

  getControllerContract: (contractAddress?: string) => ControllerContract
  getTokenContract: (contractAddress?: string) => TokenContract

  getMintModule: (contractAddress?: string) => MintModule
  getMergeModule: (contractAddress?: string) => MergeModule
  getMarketplaceModule: (contractAddress?: string) => MarketplaceModule
  getPermissionModule: (contractAddress?: string) => PermissionModule
}

export class KompleClient implements KompleClientInterface {
  client: SigningCosmWasmClient | null
  signer: OfflineSigner | null

  constructor() {
    this.signer = null
    this.client = null
  }

  async setupSigningClient(endpoint: string, signer: OfflineSigner) {
    const client = await SigningCosmWasmClient.connectWithSigner(endpoint, signer)
    this.client = client
    this.signer = signer
  }

  async setupKeplrClient(config: any) {
    const anyWindow = window as any
    const offlineSigner = await anyWindow.getOfflineSignerAuto(config.chainId)
    const client = await setupWebKeplr(config)
    this.client = client
    this.signer = offlineSigner
  }

  getControllerContract(contractAddress?: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    return new ControllerContract(this.client, this.signer, contractAddress)
  }

  getTokenContract(contractAddress?: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    return new TokenContract(this.client, this.signer, contractAddress)
  }

  getMintModule(contractAddress?: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    return new MintModule(this.client, this.signer, contractAddress)
  }

  getMergeModule(contractAddress?: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    return new MergeModule(this.client, this.signer, contractAddress)
  }

  getMarketplaceModule(contractAddress?: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    return new MarketplaceModule(this.client, this.signer, contractAddress)
  }

  getPermissionModule(contractAddress?: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    return new PermissionModule(this.client, this.signer, contractAddress)
  }
}