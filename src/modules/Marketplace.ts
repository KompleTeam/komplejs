import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  MarketplaceModuleInstantiateMsg,
  MarketplaceModuleListFixedTokenMsg,
  MarketplaceModuleDelistFixedTokenMsg,
  MarketplaceModuleUpdatePriceMsg,
  MarketplaceModuleBuyMsg,
  MarketplaceModuleExecuteMsg,
  MarketplaceModuleQueryMsg
} from '../types/modules/marketplace'

export class MarketplaceModule extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    { admin }: MarketplaceModuleInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { admin },
      'Komple Framework Marketplace Module',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async listFixedtoken({
    collection_id,
    token_id,
    price
  }: MarketplaceModuleListFixedTokenMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MarketplaceModuleExecuteMsg.LIST_FIXED_TOKEN}`]: { collection_id, token_id, price } },
      'auto'
    )
  }

  async delistFixedToken({
    collection_id,
    token_id
  }: MarketplaceModuleDelistFixedTokenMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${MarketplaceModuleExecuteMsg.DELIST_FIXED_TOKEN}`]: { collection_id, token_id } },
      'auto'
    )
  }

  async updatePrice({
    listing_type,
    collection_id,
    token_id,
    price
  }: MarketplaceModuleUpdatePriceMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${MarketplaceModuleExecuteMsg.UPDATE_PRICE}`]: {
          listing_type,
          collection_id,
          token_id,
          price
        }
      },
      'auto'
    )
  }

  async buy({
    listing_type,
    collection_id,
    token_id
  }: MarketplaceModuleBuyMsg): Promise<ExecuteResult> {
    return super.execute(
      {
        [`${MarketplaceModuleExecuteMsg.BUY}`]: { listing_type, collection_id, token_id }
      },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${MarketplaceModuleQueryMsg.CONFIG}`]: {} })
  }

  async getFixedListing(): Promise<any> {
    return super.query({ [`${MarketplaceModuleQueryMsg.FIXED_LISTING}`]: {} })
  }
}
