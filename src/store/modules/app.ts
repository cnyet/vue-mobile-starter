import { ActionContext } from 'vuex'

export interface AppStates {
  userInfo: any;
  transitionName: string;
}

const app = {
  namespaced: true,
  state: {
    userInfo: null, // 用户信息
    transitionName: 'fade' // 过渡动画
  },
  mutations: {
    // 修改用户信息
    // eslint-disable-next-line
    SET_USER_INFO (state: AppStates, value: any): void {
      state.userInfo = value
    },
    // 修改用户信息
    SET_TRANSITION_NAME (state: AppStates, value: string): void {
      state.transitionName = value
    }
  },
  actions: {
    // eslint-disable-next-line
    setUserInfo ({ commit }: ActionContext<string, any>, value: any): void{
      commit('SET_USER_INFO', value)
    },
    setTransitionName ({ commit }: ActionContext<string, any>, value: string): void {
      commit('SET_TRANSITION_NAME', value)
    }
  }
}

export default app
