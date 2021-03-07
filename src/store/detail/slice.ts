import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getDetail } from '../../http/api'

interface DetailState {
  data: any
  loading: boolean
  error: string | null
}

const initialState: DetailState = {
  loading: true,
  error: null,
  data: null
}

export const getDetailThunk = createAsyncThunk(
  'detail/getDetailThunk',
  async (id: string) => {
    // try {
    // thunkAPI.dispatch(detailSlice.actions.fetchStart())
    const data = await getDetail(id)
    // thunkAPI.dispatch(detailSlice.actions.fetchSuccess(data))
    // } catch (error) {
    //   thunkAPI.dispatch(detailSlice.actions.fetchFail(error.message))
    // }
    return data
  }
)

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: {
    [getDetailThunk.pending.type](state) {
      state.loading = true
    },
    [getDetailThunk.fulfilled.type](state, action: PayloadAction<{}>) {
      state.loading = false
      state.error = null
      state.data = action.payload
    },
    [getDetailThunk.rejected.type](
      state,
      action: PayloadAction<string | null>
    ) {
      state.loading = false
      state.error = action.payload
    }
  },
  reducers: {}
})

export default detailSlice
