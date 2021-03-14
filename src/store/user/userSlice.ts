import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSignIn } from '../../http/api'

interface UserState {
  token: string | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null
}

export const getUserThunk = createAsyncThunk(
  'user/getUserThunk',
  async (params: { email: string; password: string }) => {
    const data = await getSignIn(params)
    return data.token
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserThunk.pending.type](state) {
      state.loading = true
    },
    [getUserThunk.fulfilled.type](state, action) {
      state.loading = false
      state.error = null
      state.token = action.payload
    },
    [getUserThunk.rejected.type](state, action) {
      state.loading = false
      state.error = action.payload
    }
  },
  reducers: {
    logout(state){
      state.error = null
      state.loading = false
      state.token = null
    }
  }
})

export default userSlice
