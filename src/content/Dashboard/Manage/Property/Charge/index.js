import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Alert,
  Select,
  Table,
  Divider,
  Space,
  Typography
} from 'antd';
import {
  DownloadOutlined,
  PrinterOutlined,
  SearchOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
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
  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical" size={48}>
            <Alert
              message={
                <>
                  <Typography.Title level={5} style={{ color: 'blue' }}>
                    Please Check Your Fees Configuration
                  </Typography.Title>
                </>
              }
              description={
                <>
                  <Space direction="vertical">
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                      enim id diam nunc arcu tellus ornare. Sed diam
                      pellentesque sagittis nam. Tristique malesuada volutpat
                      platea ut rhoncus egestas dictum quam leo. Arcu montes
                      bibendum purus tortor.
                    </Typography.Text>
                    <Typography.Title level={5} style={{ color: 'blue' }}>
                      Where You Can Reach Us
                    </Typography.Title>
                  </Space>
                </>
              }
              type="info"
              showIcon
            />
            <Typography.Title level={4}>VAT/Tax/Charges</Typography.Title>
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              size="large"
            />
            <Typography.Text>
              (*) The Most Common Value ( VAT, City Tax, Service Charge ) Out of
              a Total of 1223 Open Hotel ( s) in Tirath View, Haridwar
            </Typography.Text>
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Property;
