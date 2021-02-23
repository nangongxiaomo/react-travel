import { MergeRecommendAction, SET_RECOMMEND_LIST } from './actionCreators'

interface RecommendState {
  recommendList: any[]
}

const defaultState: RecommendState = {
  recommendList: []
}

export default (state = defaultState, action: MergeRecommendAction) => {
  switch (action.type) {
    case SET_RECOMMEND_LIST:
      return {...state, recommendList: action.payload}

    default:
      return state
  }
}
