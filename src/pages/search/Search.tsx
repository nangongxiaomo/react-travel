import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, shallowEqual } from 'react-redux'
import { Spin } from 'antd'
import { searchAsyncThunk } from '../../store/search/searchSlice'
import { useSelector } from '../../hooks/useSelector'
import styles from './search.module.css'
import { FilterArea, ProductList } from '../../components'

interface paramProps {
  keywords: string
}

const Search: React.FC = () => {
  const { keywords } = useParams<paramProps>()
  const loading = useSelector(
    state => state.searchReducer.loading,
    shallowEqual
  )
  const error = useSelector(state => state.searchReducer.error, shallowEqual)
  const pagination = useSelector(
    state => state.searchReducer.pagination,
    shallowEqual
  )
  const data = useSelector(state => state.searchReducer.data, shallowEqual)
  
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(searchAsyncThunk({ nextPage: 1, pageSize: 10, keywords }))
  }, [location])

  const onPageChange = (
    nextPage: number | string,
    pageSize: number | string
  ) => {
    dispatch(searchAsyncThunk({ nextPage, pageSize, keywords }))
  }

  if (error) {
    return <div>数据获取失败</div>
  }

  if (loading) {
    return (
      <Spin
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)'
        }}
        size="large"
      />
    )
  } else {
    return (
      <div className={styles['page-content']}>
        <div className={styles['product-list-container']}>
          <FilterArea />
        </div>
        <div className={styles['product-list-container']}>
          <ProductList
            data={data}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    )
  }
}

export default Search
