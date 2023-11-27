import { Layout, theme } from 'antd';
import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';
import SideBar from './Sidebar';

const { Content, Footer } = Layout;

const SideBarLayout = () => {
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(value => {
    setCollapsed(value);
  }, []);

  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <SideBar collapsed={collapsed} handleCollapsed={handleCollapsed} />
          <Content
            style={{
              marginLeft: collapsed
                ? token.Layout.siderCollapsedWidth
                : token.Layout.siderWidth,
              transition: 'all 0.2s ease'
            }}
          >
            <Outlet />
            <Footer />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SideBarLayout;
