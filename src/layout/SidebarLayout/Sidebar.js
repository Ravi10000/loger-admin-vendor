import { Layout, Menu, theme } from 'antd';
import React, { memo } from 'react';
import { groupItem } from './items';

const SideBar = ({ collapsed, handleCollapsed }) => {
  const { token } = theme.useToken();

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
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Menu theme="light" mode="inline" items={groupItem} />
      </Layout.Sider>
    </>
  );
};

export default memo(SideBar);
