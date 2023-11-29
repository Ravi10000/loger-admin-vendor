import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';
import WithAuth from 'src/components/with-auth';

const { Content, Footer } = Layout;

const BaseLayout = () => {
  return (
    <WithAuth redirectTo="/auth/login">
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </WithAuth>
  );
};

export default BaseLayout;
