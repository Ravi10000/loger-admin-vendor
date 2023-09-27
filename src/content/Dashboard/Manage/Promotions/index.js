import { Button, Radio, Select, Space, Table, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';

const columns = [
  {
    title: '',
    render: text => <img src={text.icon} alt="" />,
    align: 'center'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Discount',
    dataIndex: 'discount'
  },
  {
    title: 'Bookable Period',
    dataIndex: 'bookablePeriod'
  },
  {
    title: 'Stay Dates',
    dataIndex: 'stayDates'
  },
  {
    title: 'Gross Bookings'
  },
  {
    title: 'Room Nights'
  },
  {
    title: 'Average Daily  Rate'
  },
  {
    title: 'Gross Revenue'
  }
];

const data = [
  {
    icon: '/assets/svg/promotions-percentage.svg',
    name: 'Portfolio Deals',
    discount: '10%',
    bookablePeriod: '4 Jul 2023-Now',
    stayDates: '4 Jul 2023-1 Oct 2023'
  },
  {
    icon: '/assets/svg/promotions-marketing.svg',
    name: 'Portfolio Deals',
    discount: '10%',
    bookablePeriod: '4 Jul 2023-Now',
    stayDates: '4 Jul 2023-1 Oct 2023'
  }
];

const Promotions = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical" size={48} style={{ width: '100%' }}>
            <Space style={{ justifyContent: 'space-between', width: '100%' }}>
              <Space direction="vertical">
                <Typography.Title level={2} style={{ marginBottom: 0 }}>
                  Promotions
                </Typography.Title>
                <Typography.Text>
                  Review,Manage and Choose New Promotions.
                </Typography.Text>
              </Space>
              <Button
                type="primary"
                onClick={() => {
                  navigate('/dashboard/manage/promotions/new-promotion');
                }}
              >
                Choose New Promotions
              </Button>
            </Space>
            <Space size="middle" direction="vertical" style={{ width: '100%' }}>
              <Space
                style={{ justifyContent: 'space-between', width: '100%' }}
                align="end"
              >
                <Space direction="vertical">
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Your Promotions
                  </Typography.Title>
                  <Typography.Text>Status</Typography.Text>
                  <Space size="middle">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                      <Radio.Button value="a">Active</Radio.Button>
                      <Radio.Button value="b">Ended</Radio.Button>
                    </Radio.Group>
                    <Select
                      style={{ width: 120 }}
                      options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' }
                      ]}
                    />
                  </Space>
                </Space>
                <Select
                  style={{ width: 200 }}
                  defaultValue="1"
                  options={[
                    { value: '1', label: 'All Time' },
                    { value: '2', label: 'Last 6 month' },
                    { value: '3', label: 'Last 3 month' },
                    { value: '4', label: 'Last 30 days' }
                  ]}
                />
              </Space>
              <Table
                scroll={{
                  x: theme.antd.screenXL
                }}
                pagination={false}
                dataSource={data || []}
                columns={columns}
              />
            </Space>
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Promotions;
