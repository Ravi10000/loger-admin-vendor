import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';

const { Content, Footer } = Layout;

const BaseLayout = () => {
  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default BaseLayout;
