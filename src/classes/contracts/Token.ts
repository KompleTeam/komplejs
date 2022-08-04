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
  TransferNftMsg,
  SendNftMsg,
  ApproveMsg,
  RevokeMsg,
  ApproveAllMsg,
  RevokeAllMsg,
  MintMsg,
  BurnMsg,
  UpdateOperatorsMsg,
  AdminTransferNftMsg,
  UpdateLocksMsg,
  UpdateTokenLocksMsg,
  UpdateOperationLockMsg,
  UpdatePerAddressLimitMsg,
  UpdateStartTimeMsg,
  UpdateWhitelistMsg,
  UpdateRoyaltyMsg,
  UpdateMetadataMsg,
  InitMetadataContractMsg,
  InitRoyaltyContractMsg,
  InitWhitelistContractMsg,
  ExecuteMsg,
  QueryMsg
} from '../../types/contracts/token'

const CODE_ID = 1

export class TokenContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    {
      admin,
      token_info,
      per_address_limit,
      start_time,
      collection_info,
      max_token_limit,
      unit_price,
      native_denom
    }: InstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(
      CODE_ID,
      {
        admin,
        token_info,
        per_address_limit,
        start_time,
        collection_info,
        max_token_limit,
        unit_price,
        native_denom
      },
      'Komple Framework Token Contract',
      'auto',
      options
    )
  }

  async transferNft({ recipient, token_id }: TransferNftMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.TRANSFER_NFT}`]: { recipient, token_id } }, 'auto')
  }

  async sendNft({ contract, token_id, msg }: SendNftMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.SEND_NFT}`]: { contract, token_id, msg } }, 'auto')
  }

  async approve({ spender, token_id, expires }: ApproveMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.APPROVE}`]: { spender, token_id, expires } }, 'auto')
  }

  async revoke({ spender, token_id }: RevokeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.REVOKE}`]: { spender, token_id } }, 'auto')
  }

  async approveAll({ operator, expires }: ApproveAllMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.APPROVE_ALL}`]: { operator, expires } }, 'auto')
  }

  async revokeAll({ operator }: RevokeAllMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.REVOKE}`]: { operator } }, 'auto')
  }

  async mint({ owner }: MintMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.MINT}`]: { owner } }, 'auto')
  }

  async burn({ token_id }: BurnMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.BURN}`]: { token_id } }, 'auto')
  }

  async updateOperator({ addrs }: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async adminTransferNft({ recipient, token_id }: AdminTransferNftMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.ADMIN_TRANSFER_NFT}`]: { recipient, token_id } }, 'auto')
  }

  async updateLocks({ locks }: UpdateLocksMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_LOCKS}`]: { locks } }, 'auto')
  }

  async updateTokenLocks({ locks }: UpdateTokenLocksMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_TOKEN_LOCKS}`]: { locks } }, 'auto')
  }

  async updateOperationLock({ lock }: UpdateOperationLockMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_OPERATION_LOCK}`]: { lock } }, 'auto')
  }

  async updatePerAddressLimit({
    per_address_limit
  }: UpdatePerAddressLimitMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.UPDATE_PER_ADDRESS_LIMIT}`]: { per_address_limit } },
      'auto'
    )
  }

  async updateStarTime({ start_time }: UpdateStartTimeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_START_TIME}`]: { start_time } }, 'auto')
  }

  async updateWhitelistContract({ whitelist }: UpdateWhitelistMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_WHITELIST}`]: { whitelist } }, 'auto')
  }

  async updateRoyaltyContract({ royalty }: UpdateRoyaltyMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_ROYALTY}`]: { royalty } }, 'auto')
  }

  async updateMetadataContract({ metadata }: UpdateMetadataMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_METADATA}`]: { metadata } }, 'auto')
  }

  async initMetadataContract({
    code_id,
    metadata_type
  }: InitMetadataContractMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.INIT_METADATA_CONTRACT}`]: { code_id, metadata_type } },
      'auto'
    )
  }

  async initRoyaltyContract({
    code_id,
    share,
    royalty_type
  }: InitRoyaltyContractMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.INIT_ROYALTY_CONTRACT}`]: { code_id, share, royalty_type } },
      'auto'
    )
  }

  async initWhitelistContract({
    code_id,
    instantiate_msg
  }: InitWhitelistContractMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${ExecuteMsg.INIT_WHITELIST_CONTRACT}`]: { code_id, instantiate_msg } },
      'auto'
    )
  }

  async getOwnerOf(tokenId: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${QueryMsg.OWNER_OF}`]: { token_id: tokenId, include_expired: includeExpired }
    })
  }

  async getApproval(tokenId: string, spender: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${QueryMsg.APPROVAL}`]: { token_id: tokenId, spender, include_expired: includeExpired }
    })
  }

  async getApprovals(tokenId: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${QueryMsg.APPROVALS}`]: { token_id: tokenId, include_expired: includeExpired }
    })
  }

  async getAllOperators(
    owner: string,
    includeExpired?: boolean,
    startAfter?: string,
    limit?: number
  ): Promise<any> {
    return super.query({
      [`${QueryMsg.ALL_OPERATORS}`]: {
        owner,
        include_expired: includeExpired,
        start_after: startAfter,
        limit
      }
    })
  }

  async getNumTokens(): Promise<any> {
    return super.query({
      [`${QueryMsg.NUM_TOKENS}`]: {}
    })
  }

  async getContractInfo(): Promise<any> {
    return super.query({
      [`${QueryMsg.CONTRACT_INFO}`]: {}
    })
  }

  async getNftInfo(tokenId: string): Promise<any> {
    return super.query({
      [`${QueryMsg.NFT_INFO}`]: { token_id: tokenId }
    })
  }

  async getAllNftInfo(tokenId: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${QueryMsg.ALL_NFT_INFO}`]: { token_id: tokenId, include_expired: includeExpired }
    })
  }

  async getTokens(owner: string, startAfter?: string, limit?: number): Promise<any> {
    return super.query({
      [`${QueryMsg.TOKENS}`]: { owner, start_after: startAfter, limit }
    })
  }

  async getAllTokens(startAfter?: string, limit?: number): Promise<any> {
    return super.query({
      [`${QueryMsg.ALL_TOKENS}`]: { start_after: startAfter, limit }
    })
  }

  async getMinter(): Promise<any> {
    return super.query({
      [`${QueryMsg.MINTER}`]: {}
    })
  }

  async getLocks(): Promise<any> {
    return super.query({
      [`${QueryMsg.LOCKS}`]: {}
    })
  }

  async getTokenLocks(tokenId: string): Promise<any> {
    return super.query({
      [`${QueryMsg.TOKEN_LOCKS}`]: { token_id: tokenId }
    })
  }

  async getMintedTokensPerAddress(address: string): Promise<any> {
    return super.query({
      [`${QueryMsg.MINTED_TOKENS_PER_ADDRESS}`]: { address }
    })
  }

  async getCollectionInfo(): Promise<any> {
    return super.query({
      [`${QueryMsg.COLLECTION_INFO}`]: {}
    })
  }

  async getContracts(): Promise<any> {
    return super.query({
      [`${QueryMsg.CONTRACTS}`]: {}
    })
  }

  async getConfig(): Promise<any> {
    return super.query({
      [`${QueryMsg.CONFIG}`]: {}
    })
  }

  async getContractOperators(): Promise<any> {
    return super.query({
      [`${QueryMsg.CONTRACT_OPERATORS}`]: {}
    })
  }
}
