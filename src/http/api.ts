import { get } from './http'

export const getRecommendList = () => get('productCollections')
