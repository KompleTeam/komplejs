import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  WhitelistContractInstantiateMsg,
  WhitelistContractUpdateStartTimeMsg,
  WhitelistContractUpdateEndTimeMsg,
  WhitelistContractAddMembersMsg,
  WhitelistContractRemoveMembersMsg,
  WhitelistContractUpdatePerAddressLimitMsg,
  WhitelistContractUpdateMemberLimitMsg,
  WhitelistContractExecuteMsg,
  WhitelistContractQueryMsg
} from '../types/contracts/whitelist'

export class WhitelistContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress?: string) {
    super(client, signer, contractAddress)
  }

  async init(
    codeId: number,
    {
      members,
      start_time,
      end_time,
      unit_price,
      per_address_limit,
      member_limit
    }: WhitelistContractInstantiateMsg,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const result = await super.instantiate(
      codeId,
      { members, start_time, end_time, unit_price, per_address_limit, member_limit },
      'Komple Framework Whitelist Contract',
      'auto',
      options
    )
    this.updateAddress(result.contractAddress)
    return result
  }

  async updateStartTime({
    timestamp
  }: WhitelistContractUpdateStartTimeMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${WhitelistContractExecuteMsg.UPDATE_START_TIME}`]: timestamp },
      'auto'
    )
  }

  async updateEndTime({ timestamp }: WhitelistContractUpdateEndTimeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${WhitelistContractExecuteMsg.UPDATE_END_TIME}`]: timestamp }, 'auto')
  }

  async addMembers({ members }: WhitelistContractAddMembersMsg): Promise<ExecuteResult> {
    return super.execute({ [`${WhitelistContractExecuteMsg.ADD_MEMBERS}`]: members }, 'auto')
  }

  async removeMembers({ members }: WhitelistContractRemoveMembersMsg): Promise<ExecuteResult> {
    return super.execute({ [`${WhitelistContractExecuteMsg.ADD_MEMBERS}`]: members }, 'auto')
  }

  async updatePerAddressLimit({
    limit
  }: WhitelistContractUpdatePerAddressLimitMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${WhitelistContractExecuteMsg.UPDATE_PER_ADDRESS_LIMIT}`]: limit },
      'auto'
    )
  }
  async updateMembersLimit({
    limit
  }: WhitelistContractUpdateMemberLimitMsg): Promise<ExecuteResult> {
    return super.execute(
      { [`${WhitelistContractExecuteMsg.UPDATE_PER_ADDRESS_LIMIT}`]: limit },
      'auto'
    )
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${WhitelistContractQueryMsg.CONFIG}`]: {} })
  }

  async getHasStarted(): Promise<any> {
    return super.query({ [`${WhitelistContractQueryMsg.HAS_STARTED}`]: {} })
  }

  async getHasEnded(): Promise<any> {
    return super.query({ [`${WhitelistContractQueryMsg.HAS_ENDED}`]: {} })
  }

  async getIsActive(): Promise<any> {
    return super.query({ [`${WhitelistContractQueryMsg.IS_ACTIVE}`]: {} })
  }

  async getMembers(startAfter?: string, limit?: number): Promise<any> {
    return super.query({
      [`${WhitelistContractQueryMsg.MEMBERS}`]: { start_after: startAfter, limit }
    })
  }

  async getHasMember(member: string): Promise<any> {
    return super.query({ [`${WhitelistContractQueryMsg.HAS_MEMBER}`]: { member } })
  }
}
