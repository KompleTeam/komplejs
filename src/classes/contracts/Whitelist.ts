import {
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  OfflineSigner,
  SigningCosmWasmClient,
  StdFee
} from 'cosmwasm'
import { ContractWrapper } from '../ContractWrapper'
import {
  InstantiateMsg,
  UpdateStartTimeMsg,
  UpdateEndTimeMsg,
  AddMembersMsg,
  RemoveMembersMsg,
  UpdatePerAddressLimitMsg,
  UpdateMemberLimitMsg,
  ExecuteMsg,
  QueryMsg
} from '../../types/contracts/whitelist'

const CODE_ID = 1

export class WhitelistContract extends ContractWrapper {
  constructor(client: SigningCosmWasmClient, signer: OfflineSigner, contractAddress: string) {
    super(client, signer, contractAddress)
  }

  async init(
    { members, start_time, end_time, unit_price, per_address_limit, member_limit }: InstantiateMsg,
    fee: number | StdFee | 'auto',
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    return super.instantiate(
      CODE_ID,
      { members, start_time, end_time, unit_price, per_address_limit, member_limit },
      'Rift Framework Whitelist Contract',
      fee,
      options
    )
  }

  async updateStartTime({ timestamp }: UpdateStartTimeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_START_TIME}`]: timestamp }, 'auto')
  }

  async updateEndTime({ timestamp }: UpdateEndTimeMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_END_TIME}`]: timestamp }, 'auto')
  }

  async addMembers({ members }: AddMembersMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.ADD_MEMBERS}`]: members }, 'auto')
  }

  async removeMembers({ members }: RemoveMembersMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.ADD_MEMBERS}`]: members }, 'auto')
  }

  async updatePerAddressLimit({ limit }: UpdatePerAddressLimitMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_PER_ADDRESS_LIMIT}`]: limit }, 'auto')
  }
  async updateMembersLimit({ limit }: UpdateMemberLimitMsg): Promise<ExecuteResult> {
    return super.execute({ [`${ExecuteMsg.UPDATE_PER_ADDRESS_LIMIT}`]: limit }, 'auto')
  }

  async getConfig(): Promise<any> {
    return super.query({ [`${QueryMsg.CONFIG}`]: {} })
  }

  async getHasStarted(): Promise<any> {
    return super.query({ [`${QueryMsg.HAS_STARTED}`]: {} })
  }

  async getHasEnded(): Promise<any> {
    return super.query({ [`${QueryMsg.HAS_ENDED}`]: {} })
  }

  async getIsActive(): Promise<any> {
    return super.query({ [`${QueryMsg.IS_ACTIVE}`]: {} })
  }

  async getMembers(startAfter?: string, limit?: number): Promise<any> {
    return super.query({ [`${QueryMsg.MEMBERS}`]: { start_after: startAfter, limit } })
  }

  async getHasMember(member: string): Promise<any> {
    return super.query({ [`${QueryMsg.HAS_MEMBER}`]: { member } })
  }
}
