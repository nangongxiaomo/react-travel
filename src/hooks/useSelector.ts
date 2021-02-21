import {
  useSelector as useCustomSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { RootState } from '../store'

export const useSelector: TypedUseSelectorHook<RootState> = useCustomSelector
