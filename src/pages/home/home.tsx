import { memo, useEffect, useState } from 'react'
import { MoreMenu, Swiper, Product } from '../../components'
import { Row, Col, Typography } from 'antd'
import pic2 from '../../common/images/sider_2019_02-04-2.png'
import { getRecommendList } from '../../http/api'

interface State {
  id: string
  title: string
  description: string
  touristRoutes: any[]
}

const Home: React.FC = memo(() => {
  const [hotRecommendList, setHotRecommendList] = useState<State[]>([])

  useEffect(() => {
    getRecommendList().then(res => {
      setHotRecommendList(res)
    })
  }, [])

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
      {hotRecommendList.length > 0 ? (
        <Product
          title={<Typography.Title level={3}>爆款推荐</Typography.Title>}
          image={pic2}
          products={hotRecommendList[0].touristRoutes}
        />
      ) : null}
    </>
  )
})

export default Home
