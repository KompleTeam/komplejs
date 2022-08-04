import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  StdFee
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import { MODULES } from '../../types'
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
  InitWhitelistContractMsg
} from '../../types/contracts/token'

const CODE_ID = 1

export class TokenContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
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
    fee: number | StdFee | 'auto',
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
      'Rift Framework Token Contract',
      fee,
      options
    )
  }

  async transferNft({ recipient, token_id }: TransferNftMsg): Promise<ExecuteResult> {
    return super.execute({ recipient, token_id }, 'auto')
  }

  async sendNft({ contract, token_id, msg }: SendNftMsg): Promise<ExecuteResult> {
    return super.execute({ contract, token_id, msg }, 'auto')
  }

  async approve({ spender, token_id, expires }: ApproveMsg): Promise<ExecuteResult> {
    return super.execute({ spender, token_id, expires }, 'auto')
  }

  async revoke({ spender, token_id }: RevokeMsg): Promise<ExecuteResult> {
    return super.execute({ spender, token_id }, 'auto')
  }

  async approveAll({ operator, expires }: ApproveAllMsg): Promise<ExecuteResult> {
    return super.execute({ operator, expires }, 'auto')
  }

  async revokeAll({ operator }: RevokeAllMsg): Promise<ExecuteResult> {
    return super.execute({ operator }, 'auto')
  }

  async mint({ owner }: MintMsg): Promise<ExecuteResult> {
    return super.execute({ owner }, 'auto')
  }

  async burn({ token_id }: BurnMsg): Promise<ExecuteResult> {
    return super.execute({ token_id }, 'auto')
  }

  async updateOperator({ addrs }: UpdateOperatorsMsg): Promise<ExecuteResult> {
    return super.execute({ addrs }, 'auto')
  }

  async adminTransferNft({ recipient, token_id }: AdminTransferNftMsg): Promise<ExecuteResult> {
    return super.execute({ recipient, token_id }, 'auto')
  }

  async updateLocks({ locks }: UpdateLocksMsg): Promise<ExecuteResult> {
    return super.execute({ locks }, 'auto')
  }

  async updateTokenLocks({ locks }: UpdateTokenLocksMsg): Promise<ExecuteResult> {
    return super.execute({ locks }, 'auto')
  }

  async updateOperationLock({ lock }: UpdateOperationLockMsg): Promise<ExecuteResult> {
    return super.execute({ lock }, 'auto')
  }

  async updatePerAddressLimit({
    per_address_limit
  }: UpdatePerAddressLimitMsg): Promise<ExecuteResult> {
    return super.execute({ per_address_limit }, 'auto')
  }

  async updateStarTime({ start_time }: UpdateStartTimeMsg): Promise<ExecuteResult> {
    return super.execute({ start_time }, 'auto')
  }

  async updateWhitelistContract({ whitelist }: UpdateWhitelistMsg): Promise<ExecuteResult> {
    return super.execute({ whitelist }, 'auto')
  }

  async updateRoyaltyContract({ royalty }: UpdateRoyaltyMsg): Promise<ExecuteResult> {
    return super.execute({ royalty }, 'auto')
  }
  async updateMetadataContract({ metadata }: UpdateMetadataMsg): Promise<ExecuteResult> {
    return super.execute({ metadata }, 'auto')
  }

  async initMetadataContract({
    code_id,
    metadata_type
  }: InitMetadataContractMsg): Promise<ExecuteResult> {
    return super.execute({ code_id, metadata_type }, 'auto')
  }

  async initRoyaltyContract({
    code_id,
    share,
    royalty_type
  }: InitRoyaltyContractMsg): Promise<ExecuteResult> {
    return super.execute({ code_id, share, royalty_type }, 'auto')
  }

  async initWhitelistContract({
    code_id,
    instantiate_msg
  }: InitWhitelistContractMsg): Promise<ExecuteResult> {
    return super.execute({ code_id, instantiate_msg }, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ config: {} })
  }

  async getControllerInfo(): Promise<any> {
    return super.query({ controller_info: {} })
  }

  async getModuleAddress(module: MODULES): Promise<any> {
    return super.query({ module_address: module })
  }
}
