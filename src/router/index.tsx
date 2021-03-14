import { lazy } from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName: "home" */ '../pages/home/home')
    )
  },
  {
    path: '/search/:keywords?',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName: "search" */ '../pages/search/Search')
    )
  },
  {
    path: '/detail/:id',
    exact: false,
    component: lazy(
      () => import(/* webpackChunkName: "detail" */ '../pages/detail/Detail')
    )
  },
  {
    path: '/register',
    component: lazy(
      () =>
        import(/* webpackChunkName: "signOut" */ '../pages/register/Register')
    )
  },
  {
    path: '/signIn',
    component: lazy(
      () => import(/* webpackChunkName: "signOut" */ '../pages/signIn/SignIn')
    )
  }
]

export default routes
