import { SigningCosmWasmClient, OfflineSigner, setupWebKeplr } from 'cosmwasm'

import { CONTRACTS, MODULES } from './types'

import { ControllerContract } from './classes/contracts'
import { MintModule } from './classes/modules'

export class RiftClient {
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

  getContract(contract: CONTRACTS, address: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    switch (contract) {
      case CONTRACTS.CONTROLLER:
        return new ControllerContract(this.client, this.signer, address)
      // case 'token':
      //   return new Token(this.client, address)
      // case 'metadata':
      //   return new Metadata(this.client, address)
      // case 'whitelist':
      //   return new Whitelist(this.client, address)
      // case 'royalty':
      //   return new Royalty(this.client, address)
      default:
        throw new Error('Invalid contract')
    }
  }

  getModule(module: MODULES, address: string) {
    if (!this.client) throw new Error('Client not initialized')
    if (!this.signer) throw new Error('Signer not initialized')
    switch (module) {
      case MODULES.MINT:
        return new MintModule(this.client, this.signer, address)
      default:
        throw new Error('Invalid contract')
    }
  }
}
