import { memo } from 'react'
import { MoreMenu, Swiper, Product } from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1 } from '../../components/Product/mock'
import pic2 from '../../common/images/sider_2019_02-04-2.png'

const Home: React.FC = memo(() => {
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
      <Product
        title={<Typography.Title level={3}>爆款推荐</Typography.Title>}
        image={pic2}
        products={productList1}
      />
    </>
  )
})

export default Home
