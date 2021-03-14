import { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Spin,
  Row,
  Col,
  DatePicker,
  Divider,
  Typography,
  Anchor,
  Menu
} from 'antd'
import {getDetailThunk} from '../../store/detail/slice'
import { useSelector } from '../../hooks/useSelector'
import { useDispatch, shallowEqual } from 'react-redux'
import styles from './detail.module.css'
import { DetailIntro } from '../../components'

const { RangePicker } = DatePicker
interface ParamsProps {
  id: string
}

const Detail: React.FC = memo(() => {
  const params = useParams<ParamsProps>()
  const dispatch = useDispatch()

  const loading = useSelector(
    state => state.detailSliceReducer.loading,
    shallowEqual
  )
  const error = useSelector(
    state => state.detailSliceReducer.error,
    shallowEqual
  )
  const product = useSelector(
    state => state.detailSliceReducer.data,
    shallowEqual
  )

  useEffect(() => {
    dispatch(getDetailThunk(params.id))
  }, [params.id])

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
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              {product ? (
                <DetailIntro
                  title={product.title}
                  desc={product.description}
                  price={product.originalPrice}
                  coupons={product.coupons}
                  points={product.points}
                  discount={product.price}
                  rating={product.rating}
                  picList={product.touristRoutePictures.map(
                    (p: { url: string }) => p.url
                  )}
                />
              ) : null}
            </Col>
            <Col span={11}>
              <RangePicker style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        <Anchor className={styles['product-detail-anchor']}>
          <Menu mode="horizontal">
            <Menu.Item key="1">
              <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Anchor.Link href="#fees" title="费用"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>

        {/* 产品特色 */}
        <div id="feature" className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.features }}
            style={{ margin: 50 }}
          ></div>
        </div>
        {/* 费用 */}
        <div id="fees" className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}
          ></div>
        </div>
        {/* 预订须知 */}
        <div id="notes" className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>预定须知</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
            style={{ margin: 50 }}
          ></div>
        </div>
      </div>
    )
  }
})

export default Detail
