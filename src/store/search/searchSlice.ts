import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
// import { getSearch } from '../../http/api'
import axios from 'axios'

interface SearchState {
  loading: boolean
  error: string | null
  data: any
  pagination: number
}

const initialState: SearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: 1
}

export const searchAsyncThunk = createAsyncThunk(
  'search/searchAsyncThunk',
  async (params: {
    nextPage: number | string
    pageSize: number | string
    keywords?: string
  }) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${params.nextPage}&pageSize=${params.pageSize}`
    if (params.keywords) {
      url += `&keyword=${params.keywords}`
    }
    const res = await axios.get(url, {
      headers: {
        'x-icode': '5537A1A8813FEF52'
      }
    })
    return {
      data: res.data,
      pagination: JSON.parse(res.headers['x-pagination'])
    }
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [searchAsyncThunk.pending.type](state) {
      state.loading = true
    },
    [searchAsyncThunk.fulfilled.type](state, action) {
      state.loading = false
      state.error = null
      state.data = action.payload.data
      state.pagination = action.payload.pagination
    },
    [searchAsyncThunk.rejected.type](
      state,
      action: PayloadAction<string | null>
    ) {
      state.loading = false
      state.error = action.payload
    }
  }
})
