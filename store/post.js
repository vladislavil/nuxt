const posts = [
  {
    title: "post",
    date: new Date(),
    view: 22,
    comment: [1, 2],
    _id: "id1"
  },
  {
    title: "post2",
    date: new Date(),
    view: 22,
    comment: [1, 2],
    _id: "id2"
  }
]

export const actions = {
  async fetchAdmin({commit}) {
    try {
      return await this.$axios.$get('/api/post/admin');
    } catch(e) {
      commit("setError", e, {root: true});
      throw e;
    }
  },

  async removePost({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`);
    } catch(e) {
      commit("setError", e, {root: true});
      throw e;
    }
  },

  async updatePost({commit}, {id, text}) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, text);
    } catch(e) {
      commit("setError", e, {root: true});
      throw e;
    }
  },

  async createPost({commit}, {title, text, image}) {
    try {
      const fd = new FormData();

      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);

      return await this.$axios.$post('/api/post/admin', fd)
    }catch(e) {
      commit("setError", e, {root: true});
      throw e;
    }
  },

  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`);
    } catch(e) {
      commit("setError", e, {root: true});
      throw e;
    }
  }
}
