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
    path: '/detail/:id',
    exact: false,
    component: lazy(
      () => import(/* webpackChunkName: "detail" */ '../pages/detail/Detail')
    ),
    routes: [
      {
        path: '/detail/signIn',
        component: lazy(
          () =>
            import(/* webpackChunkName: "signOut" */ '../pages/signIn/SignIn')
        )
      }
    ]
  }
]

export default routes
