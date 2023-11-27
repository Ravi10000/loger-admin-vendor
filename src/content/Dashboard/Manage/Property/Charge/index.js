import { Alert, Space, Table, Typography } from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';

const columns = [
  {
    title: '',
    dataIndex: 'name'
  },
  {
    title: 'Now',
    dataIndex: 'Now'
  },
  {
    title: 'Mons Popular In Tirath View, Haridwar',
    dataIndex: 'MonsPopularInTirathViewHaridwar'
  }
];
const data = [
  {
    key: '1',
    name: 'VAT',
    Now: 'VAT of 20.00 % is Included',
    MonsPopularInTirathViewHaridwar: '20 % is Included'
  },
  {
    key: '2',
    name: 'City Tax',
    Now: 'City Tax of ₹ 2 Per Person, Per Night is Not Included',
    MonsPopularInTirathViewHaridwar: '₹ 2 Per Person, Per Night is Not Included'
  }
];
const Property = () => {
  const theme = useTheme();
  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical" size={48}>
            <Alert
              message={
                <Typography.Title
                  level={5}
                  style={{ color: theme.antd.colorPrimary }}
                >
                  Please Check Your Fees Configuration
                </Typography.Title>
              }
              description={
                <>
                  <Space direction="vertical">
                    <Typography.Paragraph style={{ marginBottom: 0 }}>
                      Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                      enim id diam nunc arcu tellus ornare. Sed diam
                      pellentesque sagittis nam. Tristique malesuada volutpat
                      platea ut rhoncus egestas dictum quam leo. Arcu montes
                      bibendum purus tortor.
                    </Typography.Paragraph>
                    <Typography.Link>Where You Can Reach Us</Typography.Link>
                  </Space>
                </>
              }
              type="info"
              showIcon
            />
            <Space direction="vertical" style={{ width: '100%' }}>
              <Typography.Title level={4}>VAT/Tax/Charges</Typography.Title>
              <Table pagination={false} columns={columns} dataSource={data} />
              <Typography.Text>
                {
                  '(*) The Most Common Value ( VAT, City Tax, Service Charge ) Out of a Total of 1223 Open Hotel(s) in Tirath View, Haridwar'
                }
              </Typography.Text>
            </Space>
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Property;
