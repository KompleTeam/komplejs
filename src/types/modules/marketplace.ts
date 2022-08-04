export type ExecuteMsg = 'list_fixed_token' | 'delist_fixed_token' | 'update_price' | 'buy'

export type QueryMsg = 'config' | 'fixed_listing'

export interface InstantiateMsg {
  admin: string
  native_denom: string
}

export type Listing = 'Fixed' | 'Auction'

export interface ListFixedTokenMsg {
  collection_id: number
  token_id: number
  price: string
}

export interface DelistFixedTokenMsg {
  collection_id: number
  token_id: number
}

export interface UpdatePriceMsg {
  listing_type: Listing
  collection_id: number
  token_id: number
  price: string
}

export interface BuyMsg {
  listing_type: Listing
  collection_id: number
  token_id: number
}
