import React from 'react';
import {
  Col,
  Row,
  Card,
  Space,
  Typography,
  Select,
  Button,
  Table,
  Form
} from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import { DatePicker } from 'antd';
import {
  DownloadOutlined,
  PauseOutlined,
  EyeOutlined,
  DeleteOutlined
} from '@ant-design/icons';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const { RangePicker } = DatePicker;

const onOk = value => {
  console.log('onOk: ', value);
};

const columns = [
  {
    title: 'Invoice',
    dataIndex: 'Invoice',
    render: (_, record) => (
      <Space direction="vertical" size="small">
        <Typography.Text>104817</Typography.Text>

        <a>Invoice </a>
      </Space>
    )
  },
  {
    title: 'Property Name',
    dataIndex: 'PropertyName'
  },
  {
    title: 'Invoice Date',
    dataIndex: 'InvoiceDate'
  },
  {
    title: 'Guest Name',
    dataIndex: 'GuestName'
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
    title: 'Amount',
    dataIndex: 'Amount'
  },

  {
    title: 'Invoice Type',
    dataIndex: 'InvoiceType',
    render: (_, record) => (
      <Space direction="horizontal" size="small">
        <Typography.Text>{record.InvoiceType}</Typography.Text>
        <DeleteOutlined style={{ color: 'red' }} />
      </Space>
    )
  }
];

const data = [
  {
    key: '1',

    PropertyName: 'Westheimer Rd. Santa Ana, ',
    InvoiceDate: '13 july 2023',
    GuestName: 'Richard Parker',

    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',

    Amount: '₹ 3,568',

    InvoiceType: (
      <>
        <Button type="text">Delete</Button>
      </>
    )
  },
  {
    key: '2',

    PropertyName: 'Westheimer Rd. Santa Ana, ',
    InvoiceDate: '13 july 2023',
    GuestName: 'Richard Parker',

    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',

    Amount: '₹ 3,568',

    InvoiceType: (
      <>
        <Button type="text">Delete</Button>
      </>
    )
  },
  {
    key: '3',

    PropertyName: 'Westheimer Rd. Santa Ana, ',
    InvoiceDate: '13 july 2023',
    GuestName: 'Richard Parker',

    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',

    Amount: '₹ 3,568',

    InvoiceType: (
      <>
        <Button type="text">Delete</Button>
      </>
    )
  },
  {
    key: '4',

    PropertyName: 'Westheimer Rd. Santa Ana, ',
    InvoiceDate: '13 july 2023',
    GuestName: 'Richard Parker',

    CheckIn: '13 july 2023',
    CheckOut: '17 july 2023',

    Amount: '₹ 3,568',

    InvoiceType: (
      <>
        <Button type="text">Delete</Button>
      </>
    )
  }
];

const Finance = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Finance
          </Typography.Title>

          <Space direction="horizontal">
            <Row gutter={[32, 32]}>
              <Col lg={24} xl={14} xxl={8}>
                <Card>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title
                      level={4}
                      style={{ marginBottom: '1.5rem' }}
                    >
                      Invoices for Reservation Heck-Out Period:
                    </Typography.Title>
                    <DatePicker
                      onChange={onChange}
                      style={{ marginBottom: '1.5rem' }}
                    />
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Urna et risus diam
                      vitae ultricies massa quis odiodolor sit amet consectetur.
                      Urna et
                    </Typography.Text>
                  </Space>
                </Card>
              </Col>
              <Col lg={8}>
                <Space direction="vertical">
                  <Card style={{ marginLeft: '8rem', marginBottom: '2.5rem' }}>
                    <Space direction="vertical">
                      <Typography.Title
                        level={4}
                        style={{ marginBottom: '1.5rem' }}
                      >
                        Westheimer Rd. Santa Ana,
                      </Typography.Title>
                      <Typography.Text style={{ marginBottom: '2.5rem' }}>
                        Gali Number 10 2537/48, Chuna Mandi, Gali No 10,
                        Paharganj, 110055 New Delhi, India
                      </Typography.Text>

                      <Typography.Text>
                        Email ID : westheimerrdsantaan@gmail.com
                      </Typography.Text>
                      <Typography.Text>
                        Phone Number : +91 9874563210
                      </Typography.Text>
                      <Typography.Text>
                        Registration No. : 6866249545754
                      </Typography.Text>
                      <Typography.Text>
                        Website : www.westheimerrdsantaan.com
                      </Typography.Text>
                    </Space>
                  </Card>
                </Space>
              </Col>
            </Row>
          </Space>
          <Space direction="horizontal">
            <Space direction="horizontal">
              <DownloadOutlined
                style={{ marginLeft: '48rem', marginRight: '0.5rem' }}
              />
            <Button type="text">Downloaded</Button>
            </Space>

            <Space direction="horizontal">
              <PauseOutlined style={{ marginLeft: '3rem' }} />
              <Button type="text">Customize</Button>
            </Space>
            <Space direction="horizontal">
              <EyeOutlined style={{ marginLeft: '3rem' }} />
              <Button type="text">Delete</Button>
            </Space>
          </Space>
          <Space direction="horizontal" size={12} style={{ marginTop: '4REM' }}>
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
              style={{ marginLeft: '5rem', width: 300 }}
            />
          </Space>
          <Table
          pagination={false}
            columns={columns}
            dataSource={data}
            size="middle"
            style={{ marginTop: '3rem' }}
          />
        </Container>
      </MainWrapper>
    </>
  );
};

export default Finance;
