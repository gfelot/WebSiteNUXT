import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userr: {},
      tokken: null,
      gravatar: '',
      isUserLoggedIn: false
    },
    mutations: { // commit a muttation
    },
    getters: {
    },
    actions: { // dispatch an action
    }
  })
}

export default createStore
