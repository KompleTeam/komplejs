import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  StdFee
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  InstantiateMsg,
  ListFixedTokenMsg,
  DelistFixedTokenMsg,
  UpdatePriceMsg,
  BuyMsg
} from '../../types/modules/marketplace'

const CODE_ID = 1

export class MarketplaceModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { admin }: InstantiateMsg,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(CODE_ID, { admin }, 'Rift Framework Marketplace Module', fee, options)
  }

  async listFixedtoken({
    collection_id,
    token_id,
    price
  }: ListFixedTokenMsg): Promise<ExecuteResult> {
    return super.execute({ collection_id, token_id, price }, 'auto')
  }

  async delistFixedToken({ collection_id, token_id }: DelistFixedTokenMsg): Promise<ExecuteResult> {
    return super.execute({ collection_id, token_id }, 'auto')
  }

  async updatePrice({
    listing_type,
    collection_id,
    token_id,
    price
  }: UpdatePriceMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        listing_type,
        collection_id,
        token_id,
        price
      },
      'auto'
    )
  }

  async buy({ listing_type, collection_id, token_id }: BuyMsg): Promise<ExecuteResult> {
    return super.execute({ listing_type, collection_id, token_id }, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ config: {} })
  }

  async getOperators(): Promise<any> {
    return super.query({ operators: {} })
  }
}
