import { ThunkAction } from 'redux-thunk'
import { RootState } from '../index'
import { getRecommendList } from '../../http/api'

export const SET_RECOMMEND_LIST = 'SET_RECOMMEND_LIST'

interface RecommendListAction {
  type: typeof SET_RECOMMEND_LIST
  payload: any[]
}

const recommendActionCreator = (list:any[]) : RecommendListAction=> ({
  type: SET_RECOMMEND_LIST,
  payload: list
})

export type MergeRecommendAction = RecommendListAction

export const getRecommendListAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  MergeRecommendAction
> => {
  return (dispatch) => {
    getRecommendList().then(res => {
      dispatch(recommendActionCreator(res))
    })
    // 
  }
}
