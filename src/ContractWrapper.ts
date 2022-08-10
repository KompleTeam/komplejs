import {
  Coin,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  StdFee
} from 'cosmwasm'

export class ContractWrapper {
  protected client: SigningCosmWasmClient | null
  protected signer: OfflineSigner | null
  protected address?: string

  constructor(
    client: SigningCosmWasmClient | null,
    signer: OfflineSigner | null,
    address?: string
  ) {
    this.client = client
    this.signer = signer
    this.address = address
  }

  private async getAccount() {
    if (!this.signer) throw new Error('Signer is not initialized')
    const account = await this.signer.getAccounts()
    return account[0]
  }

  updateAddress(address: string) {
    this.address = address
  }

  protected async instantiate(
    codeId: number,
    msg: any,
    label: string,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    if (!this.client) throw new Error('Client is not initialized')
    return this.client.instantiate(
      (await this.getAccount()).address,
      codeId,
      msg,
      label,
      fee,
      options
    )
  }

  protected async execute(
    msg: any,
    fee: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> {
    if (!this.client) throw new Error('Client is not initialized')
    if (!this.address) throw new Error('Contract address is missing!')
    return this.client.execute(
      (await this.getAccount()).address,
      this.address,
      msg,
      fee,
      memo,
      funds
    )
  }

  protected async query(msg: any): Promise<any> {
    if (!this.client) throw new Error('Client is not initialized')
    if (!this.address) throw new Error('Contract address is missing!')
    return this.client.queryContractSmart(this.address, msg)
  }
}
