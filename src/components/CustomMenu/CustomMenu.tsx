import React, {memo} from 'react'
import { Menu } from 'antd'
import styles from './menu.module.css'

export const CustomMenu: React.FC = memo(() => {
  return (
    <Menu className={styles['main-menu']} mode={'horizontal'}>
      <Menu.Item key={0}>旅游首页</Menu.Item>
      <Menu.Item key={1}>周末游</Menu.Item>
      <Menu.Item key={2}>跟团游</Menu.Item>
    </Menu>
  )
}
)