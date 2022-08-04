export {
  ExecuteMsg as ControllerExecuteMsg,
  QueryMsg as ControllerQueryMsg,
  InstantiateMsg as ControllerInstantiateMsg,
  InitModuleMsg as ControllerInitModuleMsg,
  InitMarketplaceModuleMsg as ControllerInitMarketplaceModuleMsg
} from './controller'

export type CONTRACTS = 'controller' | 'token' | 'metadata' | 'whitelist' | 'royalty'

export const CONTRACTS = {
  CONTROLLER: 'controller',
  TOKEN: 'token',
  METADATA: 'metadata',
  WHITELIST: 'whitelist',
  ROYALTY: 'royalty'
}
