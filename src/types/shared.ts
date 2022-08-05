export type Modules = 'Mint' | 'Merge' | 'Marketplace' | 'Permission' | 'Swap'

export type Collections =
  | 'Normal'
  // | 'Multiple'
  | 'Linked'
// | 'OneToOne'

export type Permissions = 'Ownership' | 'Attribute'

export type Metadata = 'OneToOne' | 'Static' | 'Dynamic'

export interface CollectionInfo {
  collection_type: Collections
  name: string
  descrtiption: string
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
