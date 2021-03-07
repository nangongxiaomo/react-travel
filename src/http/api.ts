import { get } from './http'

//首页推荐数据
export const getRecommendList = () => get('productCollections')

export const getDetail = (id: unknown) => get(`touristRoutes/${id}`)
