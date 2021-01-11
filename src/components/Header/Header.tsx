import React from 'react'
import { Layout, Typography, Input, Button } from 'antd'
import logo from '../../common/images/logo.svg'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <Layout.Header>
      <div className={styles['custom-header']}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="" />
          <Typography.Title className={styles.title} level={3}>
            React TypeScript
          </Typography.Title>
          <Input.Search
            style={{ width: '20vw' }}
            placeholder="请输入搜索内容"
          />
        </div>
        <div className={styles.right}>
          <Button.Group>
            <Button className={styles.btn} ghost={true}>
              注册
            </Button>
            <Button ghost={true}>登录</Button>
          </Button.Group>
        </div>
      </div>
    </Layout.Header>
  )
}
