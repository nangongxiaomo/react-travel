import { get, post } from './http'

//首页推荐数据
export const getRecommendList = () => get('api/productCollections')

//获取详情
export const getDetail = (id: unknown) => get(`api/touristRoutes/${id}`)

//注册
export const getRegister = (params: unknown) => post('auth/register', params)

//登录
export const getSignIn = (params: unknown) => post('/auth/login', params)