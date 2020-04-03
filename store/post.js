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
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async removePost({commit}, id) {

  },

  async updatePost({commit}, formData) {

  },

  async fetchById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000);
    });
  }
}
