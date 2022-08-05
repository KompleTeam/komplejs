export {
  ExecuteMsg as ControllerExecuteMsg,
  QueryMsg as ControllerQueryMsg,
  InstantiateMsg as ControllerInstantiateMsg,
  InitModuleMsg as ControllerInitModuleMsg,
  InitMarketplaceModuleMsg as ControllerInitMarketplaceModuleMsg
} from './controller'

export type CONTRACTS = 'controller' | 'token' | 'metadata' | 'whitelist'

export const CONTRACTS = {
  CONTROLLER: 'controller' as CONTRACTS,
  TOKEN: 'token' as CONTRACTS,
  METADATA: 'metadata' as CONTRACTS,
  WHITELIST: 'whitelist' as CONTRACTS
}
