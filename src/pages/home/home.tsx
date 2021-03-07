import { memo, useEffect } from 'react'
import { MoreMenu, Swiper, Product } from '../../components'
import { useDispatch, shallowEqual } from 'react-redux'
import { Row, Col, Typography } from 'antd'
import pic2 from '../../common/images/sider_2019_02-04-2.png'
import { getRecommendListAction } from '../../store/recommendProduct/actionCreators'
import { useSelector } from '../../hooks/useSelector'

const Home: React.FC = memo(() => {
  const state = useSelector(
    state => state.recommendReducer.recommendList,
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommendListAction())
  }, [dispatch])
  return (
    <>
      {/* <CustomMenu /> */}
      <div className="content" style={{ padding: '0 50px', margin: '0 auto' }}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <MoreMenu />
          </Col>
          <Col span={18}>
            <Swiper />
          </Col>
        </Row>
      </div>
      {state.length > 0 ? (
        <Product
          title={<Typography.Title level={3}>爆款推荐</Typography.Title>}
          image={pic2}
          products={state[0].touristRoutes}
        />
      ) : null}
    </>
  )
})

export default Home
