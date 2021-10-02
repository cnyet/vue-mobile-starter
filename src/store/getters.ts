import { AppStates } from './modules/app'

interface StateInterface {
  app: AppStates;
}

export default {
  userInfo: (state: StateInterface): any => state.app.userInfo,
  transitionName: (state: StateInterface): any => state.app.transitionName
}
