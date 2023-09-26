import { Layout, Menu, theme } from 'antd';
import React, { memo } from 'react';
import useMenuItems from './items';

const SideBar = ({ collapsed, handleCollapsed }) => {
  const { token } = theme.useToken();
  const [items] = useMenuItems();

  return (
    <>
      <Layout.Sider
        theme="light"
        collapsible
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        width={token.Layout.siderWidth}
        collapsedWidth={token.colorBgLayout.siderCollapsedWidth}
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
        <Menu theme="light" mode="inline" items={items} />
      </Layout.Sider>
    </>
  );
};

export default memo(SideBar);
