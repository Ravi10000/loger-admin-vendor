import { Empty, Form, Select, Space, Tabs, Typography, theme } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import { useSearchParams } from 'react-router-dom';
import ChatBox from 'src/components/chat-box/chat-box';

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

function ReservationMessage() {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const [activeTab, setActiveTab] = useState(1);
  const { token } = theme.useToken();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const { data: properties } = useQuery({
    queryKey: ['my-properties', ['propertyName']],
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/properties/my-properties?select=${queryKey[1].join(
          ' '
        )}&limit=${Infinity}`
      );
      if (propertyId) {
        const property = res?.data?.properties?.find(
          property => property?._id === propertyId
        );
        setSelectedProperty(property);
      } else if (res?.data?.properties?.length)
        setSelectedProperty(res?.data?.properties[0]);
      return res?.data?.properties;
    }
  });
  const { data: bookings, isFetching: isFetchingBookings } = useQuery({
    enabled: !!selectedProperty,
    queryKey: ['bookings', selectedProperty?._id],
    queryFn: async () => {
      let query = '';
      const bookingsRes = await api.get(
        `/booking/${selectedProperty?._id}${query}`
      );
      setSelectedBooking(bookingsRes?.data?.bookings?.[0]);
      console.log({ bookingsRes });
      return bookingsRes?.data?.bookings || [];
    }
  });
  console.log({ properties });
  console.log({ bookings });

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
              <Form.Item
                style={{
                  margin: 0
                }}
                label={
                  <Typography.Title level={5}>Select Property</Typography.Title>
                }
                labelCol={{ span: 24 }}
              >
                <Select
                  size="large"
                  placeholder="Select Property"
                  optionFilterProp="children"
                  onChange={property => {
                    setSelectedProperty(JSON.parse(property));
                  }}
                  value={JSON.stringify(selectedProperty)}
                  options={properties?.map(property => ({
                    label: property?.propertyName,
                    value: JSON.stringify(property)
                  }))}
                />
              </Form.Item>
              <ul
                style={{
                  maxHeight: '350px',
                  overflowY: 'scroll',
                  border: '1px solid #eee',
                  borderRadius: '5px'
                }}
              >
                {bookings?.map(booking => (
                  <li
                    key={booking?._id}
                    style={{
                      cursor: 'pointer',
                      padding: '15px 20px',
                      border: '1px solid #eee',
                      ...(selectedBooking?._id === booking?._id && {
                        backgroundColor: '#eee'
                      })
                    }}
                    onClick={() => {
                      if (selectedBooking?._id === booking?._id) return;
                      setSelectedBooking(booking);
                    }}
                  >
                    {dayjs(booking?.checkInDate).format('DD, MMM')} -{' '}
                    {dayjs(booking?.checkOutDate).format('DD, MMM')}
                  </li>
                ))}
              </ul>
            </Space>
          </SidebarContent>
        </Sidebar>
        <div style={{ width: '100%' }}>
          <ChatBox
            {...{
              booking: selectedBooking
              // title: selectedProperty?.propertyName
            }}
          />
        </div>
        {/* <ChatWindow>
          <PlaceHolder>
          </PlaceHolder>
        </ChatWindow> */}
        <Aside $borderColor={token.colorSplit}></Aside>
      </RootWrapper>
    </>
  );
}

export default ReservationMessage;
