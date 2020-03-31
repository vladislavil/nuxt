export const state = () => ({
  users: []
});

export const getters = {
  users: state => (state.users)
}

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
}

export const actions = {
  async fetchUsers({commit}) {
    try {
      let users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
      commit('setUsers', users);
    }catch(e) {
      throw new Error(e);
    }
  },
  async fetchUserById({}, userId) {
    try {
      return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }catch(e) {
      throw new Error(e);
    }
  }
}