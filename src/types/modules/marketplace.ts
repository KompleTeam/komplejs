export type MarketplaceModuleExecuteMsg =
  | 'list_fixed_token'
  | 'delist_fixed_token'
  | 'update_price'
  | 'buy'

export const MarketplaceModuleExecuteMsg = {
  LIST_FIXED_TOKEN: 'list_fixed_token' as MarketplaceModuleExecuteMsg,
  DELIST_FIXED_TOKEN: 'delist_fixed_token' as MarketplaceModuleExecuteMsg,
  UPDATE_PRICE: 'update_price' as MarketplaceModuleExecuteMsg,
  BUY: 'buy' as MarketplaceModuleExecuteMsg
}

export type MarketplaceModuleQueryMsg = 'config' | 'fixed_listing'

export const MarketplaceModuleQueryMsg = {
  CONFIG: 'config' as MarketplaceModuleQueryMsg,
  FIXED_LISTING: 'fixed_listing' as MarketplaceModuleQueryMsg
}

export interface MarketplaceModuleInstantiateMsg {
  admin: string
  native_denom: string
}

export type Listing = 'Fixed' | 'Auction'

export interface MarketplaceModuleListFixedTokenMsg {
  collection_id: number
  token_id: number
  price: string
}

export interface MarketplaceModuleDelistFixedTokenMsg {
  collection_id: number
  token_id: number
}

export interface MarketplaceModuleUpdatePriceMsg {
  listing_type: Listing
  collection_id: number
  token_id: number
  price: string
}

export interface MarketplaceModuleBuyMsg {
  listing_type: Listing
  collection_id: number
  token_id: number
}
