import store from '../index'
import router from '../../router/index'
export default {
  state: {
    info: {}
  },
  mutations: {
    getInfo (state, token) {
      // 通过 token 向后台请求用户权限等信息
      state.info = {
        role: 'superAdmin',
        permissions: '超级管理员'
      }
    },
    setRole (state, options) {
      // 通过 token 向后台请求用户权限等信息
      state.info = {
        role: options.role,
        permissions: options.permissions
      }

      store.dispatch('newRoutes', options.role)
      router.addRoutes(store.getters.addRouters)

    }
  },
  actions: {
    getInfo ({commit}, token) {
      commit('getInfo', token)
    },
    setRole ({commit}, options){
      // 权限测试
      commit('setRole', options)
    }
  }
}
