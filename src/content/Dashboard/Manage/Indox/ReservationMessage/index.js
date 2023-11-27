import { Empty, Form, Select, Space, Tabs, Typography, theme } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const media = {
  noMessageIcon: '/assets/svg/no-message.svg'
};

const RootWrapper = styled.div`
  height: calc(100vh - ${props => props.$relHeight}px);
  display: flex;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #fff;
  border-right: ${props => props.$borderColor} solid 1px;
`;

const Aside = styled.div`
  width: 300px;
  background-color: #fff;
  border-left: ${props => props.$borderColor} solid 1px;
`;

const ChatWindow = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const PlaceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  flex: 1;
`;

const SidebarContent = styled.div`
  padding: 16px;
`;

const ReservationMessage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { token } = theme.useToken();

  const handleTabChange = key => {
    setActiveTab(key);
  };

  return (
    <>
      <Tabs
        defaultActiveKey={activeTab}
        items={[
          {
            key: 1,
            label: 'Guest'
          },
          {
            key: 2,
            label: 'Customer Service'
          }
        ]}
        tabBarStyle={{
          marginBottom: 0,
          height: 60,
          paddingInline: token.paddingLG,
          backgroundColor: '#ffffff'
        }}
        onChange={handleTabChange}
      />
      <RootWrapper $relHeight={token.Layout.headerHeight + 60 + 2 * 24}>
        <Sidebar $borderColor={token.colorSplit}>
          <SidebarContent>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Typography.Title level={5} style={{ marginBottom: 0 }}>
                Messages
              </Typography.Title>
              <Form.Item label="Sort Messages By" wrapperCol={{ span: 24 }}>
                <Select
                  style={{ width: '100%' }}
                  options={[
                    {
                      label: 'All Message',
                      value: '1'
                    },
                    {
                      label: 'Unread Message',
                      value: '2'
                    }
                  ]}
                />
              </Form.Item>
            </Space>
          </SidebarContent>
        </Sidebar>
        <ChatWindow>
          <PlaceHolder>
            <Empty
              image={media.noMessageIcon}
              imageStyle={{ height: 'auto' }}
              description={
                <Space direction="vertical" size="middle">
                  <Typography.Text>No Messages</Typography.Text>
                  <Typography.Text>
                    Your Conversations with your Guests will appear here.
                  </Typography.Text>
                </Space>
              }
            />
          </PlaceHolder>
        </ChatWindow>
        <Aside $borderColor={token.colorSplit}></Aside>
      </RootWrapper>
    </>
  );
};

export default ReservationMessage;
