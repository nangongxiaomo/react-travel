import React, { memo } from 'react'
import style from './moreMenu.module.css'
import { sideMenuList } from './mock'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const MoreMenu: React.FC = memo(() => {
  return (
    <Menu mode="vertical" className={style['more-menu']}>
      {sideMenuList.map((item, index) => (
        <Menu.SubMenu
          title={
            <span>
              <GifOutlined />
              {item.title}
            </span>
          }
          key={index}
        >
          {item.subMenu.map((menu, idx) => (
            <Menu.SubMenu
              title={
                <span>
                  <GifOutlined />
                  {menu.title}
                </span>
              }
              key={menu.title}
            >
              {menu.subMenu.map(child => (
                <Menu.Item key={child}>
                  <span>
                    <GifOutlined />
                    {child}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
})
