import React, {memo} from 'react'
import { Layout } from 'antd'

export const Footer = memo(() => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Layout.Footer>
  )
})
