import { request } from "express";

export default function ({ $axios, redirect, store }) {

  $axios.interseptors.request.use(request => {
    if(store.getters['auth/isAuth'] && !request.headers.common['Authorization']) {
      const token = store.gettres['auth/token'];
      request.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return request;
  })

  $axios.onError(error => {
    if(error.response) {
      if(error.response.status === 401) {
        redirect('/admin/login?message=session');
        store.dispatch('auth/logout');
      }

      if(error.response.status === 500) {
        console.error("Server 500 error!");
      }
    }
  })

}
