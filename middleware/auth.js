export default function({store, redirect}) {
  if(!store.getters['login/isAuth']) {
    redirect('/login');
  }
}