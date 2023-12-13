import { Layout, Menu, theme } from 'antd';
import React, { memo } from 'react';
import useMenuItems from './items';
// import { useLocation } from 'react-router-dom';

const SideBar = ({ collapsed, handleCollapsed }) => {
  const { token } = theme.useToken();
  const [items] = useMenuItems();
  // const { pathname } = useLocation();
  // console.log({ pathname });

  return (
    <>
      <Layout.Sider
        theme="light"
        collapsible
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        width={token.Layout.siderWidth}
        collapsedWidth={token.Layout.siderCollapsedWidth}
        style={{
          position: 'fixed',
          top: token.Layout.headerHeight,
          left: 0,
          bottom: 0,
          overflow: 'auto',
          height: `calc(100vh - ${
            token.Layout.headerHeight + token.Layout.triggerHeight
          }px)`
        }}
      >
        <Menu
Reservations          // selectedKeys={[pathname]}
          theme="light"
          mode="inline"
          items={items}
        />
      </Layout.Sider>
    </>
  );
};

export default memo(SideBar);
