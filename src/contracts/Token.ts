import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  TokenContractInstantiateMsg,
  TokenContractTransferNftMsg,
  TokenContractSendNftMsg,
  TokenContractApproveMsg,
  TokenContractRevokeMsg,
  TokenContractApproveAllMsg,
  TokenContractRevokeAllMsg,
  TokenContractMintMsg,
  TokenContractBurnMsg,
  TokenContractUpdateOperatorsMsg,
  TokenContractUpdateRoyaltyShareMsg,
  TokenContractAdminTransferNftMsg,
  TokenContractUpdateLocksMsg,
  TokenContractUpdateTokenLocksMsg,
  TokenContractUpdatePerAddressLimitMsg,
  TokenContractUpdateStartTimeMsg,
  TokenContractUpdateWhitelistMsg,
  TokenContractUpdateMetadataMsg,
  TokenContractInitMetadataContractMsg,
  TokenContractInitWhitelistContractMsg,
  TokenContractExecuteMsg,
  TokenContractQueryMsg
} from '../types/contracts/token'

export class TokenContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    {
      admin,
      token_info,
      per_address_limit,
      start_time,
      collection_info,
      max_token_limit,
      unit_price,
      native_denom
    }: TokenContractInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
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
    this.updateAddress(result.contractAddress)
    return result
  }

  async transferNft({ recipient, token_id }: TokenContractTransferNftMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.TRANSFER_NFT}`]: { recipient, token_id } },
      'auto'
    )
  }

  async sendNft({ contract, token_id, msg }: TokenContractSendNftMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.SEND_NFT}`]: { contract, token_id, msg } },
      'auto'
    )
  }

  async approve({ spender, token_id, expires }: TokenContractApproveMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.APPROVE}`]: { spender, token_id, expires } },
      'auto'
    )
  }

  async revoke({ spender, token_id }: TokenContractRevokeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.REVOKE}`]: { spender, token_id } }, 'auto')
  }

  async approveAll({ operator, expires }: TokenContractApproveAllMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.APPROVE_ALL}`]: { operator, expires } },
      'auto'
    )
  }

  async revokeAll({ operator }: TokenContractRevokeAllMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.REVOKE}`]: { operator } }, 'auto')
  }

  async mint({ owner }: TokenContractMintMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.MINT}`]: { owner } }, 'auto')
  }

  async burn({ token_id }: TokenContractBurnMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.BURN}`]: { token_id } }, 'auto')
  }

  async updateOperator({ addrs }: TokenContractUpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.UPDATE_OPERATORS}`]: { addrs } }, 'auto')
  }

  async updateRoyaltyShare({
    royalty_share
  }: TokenContractUpdateRoyaltyShareMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.UPDATE_ROYALTY_SHARE}`]: { royalty_share } },
      'auto'
    )
  }

  async adminTransferNft({
    recipient,
    token_id
  }: TokenContractAdminTransferNftMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.ADMIN_TRANSFER_NFT}`]: { recipient, token_id } },
      'auto'
    )
  }

  async updateLocks({ locks }: TokenContractUpdateLocksMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.UPDATE_LOCKS}`]: { locks } }, 'auto')
  }

  async updateTokenLocks({ locks }: TokenContractUpdateTokenLocksMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.UPDATE_TOKEN_LOCKS}`]: { locks } }, 'auto')
  }

  async updatePerAddressLimit({
    per_address_limit
  }: TokenContractUpdatePerAddressLimitMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.UPDATE_PER_ADDRESS_LIMIT}`]: { per_address_limit } },
      'auto'
    )
  }

  async updateStarTime({ start_time }: TokenContractUpdateStartTimeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.UPDATE_START_TIME}`]: { start_time } },
      'auto'
    )
  }

  async updateWhitelistContract({
    whitelist
  }: TokenContractUpdateWhitelistMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.UPDATE_WHITELIST}`]: { whitelist } }, 'auto')
  }

  async updateMetadataContract({
    metadata
  }: TokenContractUpdateMetadataMsg): Promise<ExecuteResult> {
    return super.execute({ [`${TokenContractExecuteMsg.UPDATE_METADATA}`]: { metadata } }, 'auto')
  }

  async initMetadataContract({
    code_id,
    metadata_type
  }: TokenContractInitMetadataContractMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.INIT_METADATA_CONTRACT}`]: { code_id, metadata_type } },
      'auto'
    )
  }

  async initWhitelistContract({
    code_id,
    instantiate_msg
  }: TokenContractInitWhitelistContractMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${TokenContractExecuteMsg.INIT_WHITELIST_CONTRACT}`]: { code_id, instantiate_msg } },
      'auto'
    )
  }

  async getOwnerOf(tokenId: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.OWNER_OF}`]: { token_id: tokenId, include_expired: includeExpired }
    })
  }

  async getApproval(tokenId: string, spender: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.APPROVAL}`]: {
        token_id: tokenId,
        spender,
        include_expired: includeExpired
      }
    })
  }

  async getApprovals(tokenId: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.APPROVALS}`]: { token_id: tokenId, include_expired: includeExpired }
    })
  }

  async getAllOperators(
    owner: string,
    includeExpired?: boolean,
    startAfter?: string,
    limit?: number
  ): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.ALL_OPERATORS}`]: {
        owner,
        include_expired: includeExpired,
        start_after: startAfter,
        limit
      }
    })
  }

  async getNumTokens(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.NUM_TOKENS}`]: {}
    })
  }

  async getContractInfo(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.CONTRACT_INFO}`]: {}
    })
  }

  async getNftInfo(tokenId: string): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.NFT_INFO}`]: { token_id: tokenId }
    })
  }

  async getAllNftInfo(tokenId: string, includeExpired?: boolean): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.ALL_NFT_INFO}`]: {
        token_id: tokenId,
        include_expired: includeExpired
      }
    })
  }

  async getTokens(owner: string, startAfter?: string, limit?: number): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.TOKENS}`]: { owner, start_after: startAfter, limit }
    })
  }

  async getAllTokens(startAfter?: string, limit?: number): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.ALL_TOKENS}`]: { start_after: startAfter, limit }
    })
  }

  async getMinter(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.MINTER}`]: {}
    })
  }

  async getLocks(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.LOCKS}`]: {}
    })
  }

  async getTokenLocks(tokenId: string): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.TOKEN_LOCKS}`]: { token_id: tokenId }
    })
  }

  async getMintedTokensPerAddress(address: string): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.MINTED_TOKENS_PER_ADDRESS}`]: { address }
    })
  }

  async getCollectionInfo(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.COLLECTION_INFO}`]: {}
    })
  }

  async getContracts(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.CONTRACTS}`]: {}
    })
  }

  async getConfig(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.CONFIG}`]: {}
    })
  }

  async getContractOperators(): Promise<any> {
    return super.query({
      [`${TokenContractQueryMsg.CONTRACT_OPERATORS}`]: {}
    })
  }
}
