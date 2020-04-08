import Cookie from "cookie"
import Cookies from "js-cookie"
import JwtDecode from "jwt-decode"

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
    Cookies.set('jwt-token', token);
  },
  logOut(state) {
    state.token = null;
    Cookies.remove('jwt-token');
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
  autoLogin({dispatch}) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie;
    const cookies = Cookie.parse(cookieStr || '') || {};
    const token = cookies['jwt-token'];

    if(isJWTValid(token)) {
      dispatch('setToken', token);
    } else {
      dispatch('logOut');
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

function isJWTValid(token) {
  if(!token) {
    return false;
  }

  const jwtData = JwtDecode(token) || {}
  console.log(jwtData);

  const expires = jwtData.exp || 0;

  return (new Date().getTime() / 1000) < expires;

}
