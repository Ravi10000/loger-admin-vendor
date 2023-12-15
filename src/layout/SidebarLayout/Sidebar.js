import { Layout, Menu, theme } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import useMenuItems from './items';
import { useLocation } from 'react-router-dom';

const SideBar = ({ collapsed, handleCollapsed }) => {
  const { token } = theme.useToken();
  const [items] = useMenuItems();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    let selectedChild = null;
    const selectedItem = items.find(item => {
      if (item?.children) {
        selectedChild = item.children?.find(
          child => child?.label?.props?.to === pathname
        );
        if (selectedChild) return true;
      }
      return pathname?.includes?.(item?.label?.props?.to);
    });
    const selectedKeys = [selectedItem?.key];
    if (selectedChild) {
      selectedKeys.push(selectedChild.key);
      setOpenKeys([selectedItem?.key]);
    }
    setSelectedKeys(selectedKeys);
  }, [pathname, items]);

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
          gap: '50px',
          height: `calc(100vh - ${
            token.Layout.headerHeight + token.Layout.triggerHeight
          }px)`
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          // onSelect={(...props) => {
          //   console.log({ props });
          // }}
          onOpenChange={keyOpened => {
            console.log({ keyOpened });
            setOpenKeys(keyOpened);
          }}
        />
      </Layout.Sider>
    </>
  );
};

export default memo(SideBar);
