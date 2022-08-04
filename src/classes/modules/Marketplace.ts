import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  InstantiateMsg,
  ListFixedTokenMsg,
  DelistFixedTokenMsg,
  UpdatePriceMsg,
  BuyMsg,
  ExecuteMsg,
  QueryMsg
} from '../../types/modules/marketplace'

const CODE_ID = 1

export class MarketplaceModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init({ admin }: InstantiateMsg, options?: InstantiateOptions): Promise<InstantiateResult> {
    return super.instantiate(
      CODE_ID,
      { admin },
      'Komple Framework Marketplace Module',
      'auto',
      options
    )
  }

  async listFixedtoken({
    collection_id,
    token_id,
    price
  }: ListFixedTokenMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.LIST_FIXED_TOKEN}`]: { collection_id, token_id, price } },
      'auto'
    )
  }

  async delistFixedToken({ collection_id, token_id }: DelistFixedTokenMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.DELIST_FIXED_TOKEN}`]: { collection_id, token_id } },
      'auto'
    )
  }

  async updatePrice({
    listing_type,
    collection_id,
    token_id,
    price
  }: UpdatePriceMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${ExecuteMsg.UPDATE_PRICE}`]: {
          listing_type,
          collection_id,
          token_id,
          price
        }
      },
      'auto'
    )
  }

  async buy({ listing_type, collection_id, token_id }: BuyMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${ExecuteMsg.BUY}`]: { listing_type, collection_id, token_id }
      },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${QueryMsg.CONFIG}`]: {} })
  }

  async getFixedListing(): Promise<any> {
    return super.query({ [`${QueryMsg.FIXED_LISTING}`]: {} })
  }
}
