export const state = () => ({
  token: null
});

export const getters = {
  isAuth(state) {
    return !!state.token;
  },
  token(state) {
    return state.token;
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  logOut(state) {
    state.token = null;
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const {token} = await this.$axios.$post('/api/auth/admin/login', formData)
      console.log(token)
      dispatch('setToken', token);
    }catch(e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
  async createUser({commit}, formData) {
    try {
      this.$axios.$post('/api/auth/admin/create', formData)
    }catch(e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
  setToken({commit}, token) {
    this.$axios.setToken(token, 'Bearer');
    commit('setToken', token);
  },
  logOut({commit}) {
    this.$axios.setToken(false);
    commit('logOut');
  }
}
