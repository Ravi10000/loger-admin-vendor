import {
  DownloadOutlined,
  PrinterOutlined,
  SearchOutlined
} from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Typography
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';

const columns = [
  {
    title: 'Reservation No.',
    dataIndex: 'reservationNo'
  },
  {
    title: 'Property Name',
    dataIndex: 'propertyName'
  },
  {
    title: 'Guest Name',
    dataIndex: 'guestName'
  },
  {
    title: 'Check In',
    dataIndex: 'checkIn'
  },
  {
    title: 'Check Out',
    dataIndex: 'checkOut'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  },
  {
    title: 'Price',
    dataIndex: 'price'
  },
  {
    title: 'commission',
    dataIndex: 'checkIn'
  },
  {
    title: 'Booked On',
    dataIndex: 'bookedOn'
  }
];

const data = [
  {
    reservationNo: '2564568732',
    propertyName: 'Westheimer Rd. Santa Ana',
    guestName: 'Richard Parker',
    checkIn: '13 july 2023',
    checkOut: '17 july 2023',
    status: 'Paid',
    price: 0,
    commission: 100,
    bookedOn: '13 July 2023'
  },
  {
    reservationNo: '2564568732',
    propertyName: 'Westheimer Rd. Santa Ana',
    guestName: 'Richard Parker',
    checkIn: '13 july 2023',
    checkOut: '17 july 2023',
    status: 'Paid',
    price: 0,
    commission: 100,
    bookedOn: '13 July 2023'
  },
  {
    reservationNo: '2564568732',
    propertyName: 'Westheimer Rd. Santa Ana',
    guestName: 'Richard Parker',
    checkIn: '13 july 2023',
    checkOut: '17 july 2023',
    status: 'Paid',
    price: 0,
    commission: 100,
    bookedOn: '13 July 2023'
  },
  {
    reservationNo: '2564568732',
    propertyName: 'Westheimer Rd. Santa Ana',
    guestName: 'Richard Parker',
    checkIn: '13 july 2023',
    checkOut: '17 july 2023',
    status: 'Paid',
    price: 0,
    commission: 100,
    bookedOn: '13 July 2023'
  }
];

const Reservations = () => {
  const theme = useTheme();

  return (
    <>
      <MainWrapper>
        <Container>
          <Row gutter={[0, 48]}>
            <Col xs={24}>
              <Space
                align="center"
                style={{ justifyContent: 'space-between', width: '100%' }}
              >
                <Typography.Title level={2} style={{ marginBottom: 0 }}>
                  Reservations
                </Typography.Title>
                <Space align="center">
                  <Button icon={<PrinterOutlined />} type="text">
                    Print Reservation List
                  </Button>
                  <Button icon={<DownloadOutlined />} type="text">
                    Download
                  </Button>
                </Space>
              </Space>
            </Col>
            <Col xs={24}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Space
                  style={{ width: '100%', justifyContent: 'space-between' }}
                  align="end"
                >
                  <Form
                    layout="vertical"
                    style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}
                  >
                    <Form.Item style={{ marginBlock: 0 }} label="Date of">
                      <Select
                        style={{ width: 120 }}
                        options={[
                          { value: 'jack', label: 'Jack' },
                          { value: 'lucy', label: 'Lucy' },
                          { value: 'Yiminghe', label: 'yiminghe' }
                        ]}
                      />
                    </Form.Item>
                    <Form.Item style={{ marginBlock: 0 }} label="From">
                      <DatePicker />
                    </Form.Item>
                    <Form.Item style={{ marginBlock: 0 }} label="Until">
                      <DatePicker />
                    </Form.Item>
                    <Form.Item style={{ marginBlock: 0 }}>
                      <Button type="primary">Show</Button>
                    </Form.Item>
                  </Form>
                  <Input
                    placeholder="Search Reservation"
                    suffix={
                      <SearchOutlined
                        style={{ color: theme.antd.colorTextPlaceholder }}
                      />
                    }
                  />
                </Space>
                <Table
                  bordered
                  scroll={{
                    x: theme.antd.screenXL
                  }}
                  pagination={false}
                  dataSource={data || []}
                  columns={columns}
                />
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Reservations;
