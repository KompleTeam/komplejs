export type Modules =
  | 'mint_module'
  | 'merge_module'
  | 'marketplace_module'
  | 'permission_module'
  | 'swap_module'

export type Collections =
  | 'normal'
  // | 'Multiple'
  | 'linked'
// | 'OneToOne'

export type Permissions = 'ownership' | 'attribute'

export type Metadata = 'one_to_one' | 'static' | 'dynamic'

export interface CollectionInfo {
  collection_type: Collections
  name: string
  description: string
  image: string
  external_link?: string
}

export interface TokenInfo {
  symbol: string
  minter: string
}

export type Expiration = { at_height: number } | { at_time: string } | { never: object }

export interface Locks {
  mint_lock: boolean
  burn_lock: boolean
  transfer_lock: boolean
  send_lock: boolean
}
