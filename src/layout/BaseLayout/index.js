import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';

const BaseLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default BaseLayout;
