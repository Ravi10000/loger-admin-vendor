import React from 'react';
import { Space, Typography, Select, Button, Table, Form } from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import { DownloadOutlined, PrinterOutlined } from '@ant-design/icons';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = value => {
  console.log('onOk: ', value);
};

const columns = [
  {
    title: 'Reservation No.',
    dataIndex: 'ReservationNo'
  },
  {
    title: 'Property Name',
    dataIndex: 'PropertyName'
  },
  {
    title: 'Location',
    dataIndex: 'Location'
  },
  {
    title: 'Guest Name',
    dataIndex: 'GuestName',
    render: (_, record) => (
      <Space direction="vertical" size="small">
        <a>{record.GuestName}</a>
        <Space direction="horizontal" size="small">
          <Typography.Text>2 adults</Typography.Text>
          <Typography.Text>1 child</Typography.Text>
        </Space>
      </Space>
    )
  },
  {
    title: 'Guest Phone No',
    dataIndex: 'GuestPhoneNo'
  },
  {
    title: 'Check In',
    dataIndex: 'CheckIn'
  },
  {
    title: 'Check Out',
    dataIndex: 'CheckOut'
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    render: (_, record) => (
      <Space direction="vertical">
        <Typography.Text>Paid</Typography.Text>
        <Typography.Text>Online</Typography.Text>
      </Space>
    )
  },
  {
    title: 'Total Payment',
    dataIndex: 'TotalPayment'
  },
  {
    title: 'Taxes & Charges',
    dataIndex: 'TaxesCharges'
  },
  {
    title: 'Booked On',
    dataIndex: 'BookedOn'
  },
  {
    title: 'Arival Time',
    dataIndex: 'ArivalTime'
  }
];

const data = [
  {
    key: '1',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '2',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '3',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '4',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '5',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '6',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '7',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  },
  {
    key: '8',
    ReservationNo: '2564568732',
    PropertyName: 'Westheimer Rd. Santa Ana, ',
    Location: 'Mahipal Khandari, Haridwar, India',
    GuestName: 'Richard Parker',
    GuestPhoneNo: '+91 987 654 1230',
    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',
    Status: 'Paid',
    TotalPayment: '₹ 900',
    TaxesCharges: '₹ 900',
    BookedOn: '13 July 2023',
    ArivalTime: '09:00 am'
  }
];

const ReservationList = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical">
            <Space
              direction="horizontal"
              style={{
                width: '100%',
                alignItem: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <Typography.Title level={2}>Reservations</Typography.Title>
              <PrinterOutlined style={{ marginLeft: '60rem' }} />
              <Button type='text'>Print Reservation List</Button>
              <DownloadOutlined style={{ marginLeft: '5rem' }} />
              <Button type='text'>Downloaded</Button>
            </Space>
            <Space direction="horizontal" size={12}>
              <Form.Item label="Date of" labelCol={{ span: 24 }}>
                <DatePicker showTime onChange={onChange} onOk={onOk} />
              </Form.Item>
              <Form.Item label="Filter by Dates" labelCol={{ span: 24 }}>
                <RangePicker
                  showTime={{
                    format: 'HH:mm'
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={onChange}
                  onOk={onOk}
                />
              </Form.Item>
              <Select showSearch placeholder="filter" />
              <Button type="primary">Show Results</Button>
              <Select
                showSearch
                placeholder="filter"
                style={{ marginLeft: '25rem', width: 300 }}
              />
            </Space>
            <Table pagination={false}columns={columns} dataSource={data} size="middle" />
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ReservationList;
