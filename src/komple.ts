import { SigningCosmWasmClient, OfflineSigner, setupWebKeplr, GasPrice } from 'cosmwasm'
import { ControllerContract, TokenContract } from './contracts'
import { MintModule, MergeModule, MarketplaceModule, PermissionModule } from './modules'

interface KompleClientInterface {
  client: SigningCosmWasmClient | null
  signer: OfflineSigner | null

  setupSigningClient: (endpoint: string, signer: OfflineSigner) => Promise<void>

  getControllerContract: (contractAddress?: string) => ControllerContract
  getTokenContract: (contractAddress?: string) => TokenContract

  getMintModule: (contractAddress?: string) => MintModule
  getMergeModule: (contractAddress?: string) => MergeModule
  getMarketplaceModule: (contractAddress?: string) => MarketplaceModule
  getPermissionModule: (contractAddress?: string) => PermissionModule
}

export class KompleClient implements KompleClientInterface {
  client: SigningCosmWasmClient | null = null
  signer: OfflineSigner | null = null

  constructor(endpoint: string, signer: OfflineSigner) {
    this.setupSigningClient(endpoint, signer)
  }

  async setupSigningClient(endpoint: string, signer: OfflineSigner) {
    const client = await SigningCosmWasmClient.connectWithSigner(endpoint, signer, {
      gasPrice: GasPrice.fromString('0.025ujunox'),
      prefix: 'juno'
    })
    this.client = client
    this.signer = signer
  }

  getControllerContract(contractAddress?: string) {
    return new ControllerContract(this.client, this.signer, contractAddress)
  }

  getTokenContract(contractAddress?: string) {
    return new TokenContract(this.client, this.signer, contractAddress)
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
