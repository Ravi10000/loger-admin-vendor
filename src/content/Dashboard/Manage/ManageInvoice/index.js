import {
  Button,
  Col,
  DatePicker,
  Radio,
  Row,
  Space,
  Table,
  Typography
} from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const columns = [
  {
    title: 'Document Name',
    dataIndex: 'name'
  },
  {
    title: 'Document Number',
    dataIndex: 'age'
  },
  {
    title: 'Date',
    dataIndex: 'date'
  },
  {
    title: 'Actions',
    dataIndex: 'address'
  },
  {
    title: '',
    dataIndex: 'add'
  },

  {
    title: 'Amount',
    dataIndex: 'NetPayment'
  }
];
const data = [
  {
    key: '1',
    name: 'August Invoice',
    age: 1000 - 1539485123,
    date: '24, August, 2023',
    address: (
      <>
        <Button
          type="text "
          style={{ color: 'blue' }}
          icon={<DownloadOutlined />}
        >
          Download Invoice
        </Button>
      </>
    ),
    add: (
      <>
        <Button type="text" style={{ color: 'blue' }} icon={<EyeOutlined />}>
          View Statement
        </Button>
      </>
    ),
    NetPayment: 'MAD - 2, 524.41'
  },
  {
    key: '2',
    name: 'August Invoice',
    age: 1000 - 1539485123,
    date: '24, August, 2023',
    address: (
      <>
        <Button
          type="text "
          style={{ color: 'blue' }}
          icon={<DownloadOutlined />}
        >
          Download Invoice
        </Button>
      </>
    ),

    NetPayment: 'MAD - 2, 524.41'
  },
  {
    key: '3',
    name: 'August Invoice',
    age: 1000 - 1539485123,
    date: '24, August, 2023',
    address: (
      <>
        <Button
          type="text "
          style={{ color: 'blue' }}
          icon={<DownloadOutlined />}
        >
          Download Invoice
        </Button>
      </>
    ),

    NetPayment: 'MAD - 2, 524.41'
  }
];
const columns1 = [
  {
    title: 'Document Name',
    dataIndex: 'name'
  },
  {
    title: 'Document Number',
    dataIndex: 'age'
  },
  {
    title: 'Actions',
    dataIndex: 'address'
  },
  {
    title: '',
    dataIndex: 'add'
  },
  {
    title: '',
    dataIndex: 'add1'
  },
  {
    title: 'Net Payment',
    dataIndex: 'NetPayment'
  }
];
const data1 = [
  {
    key: '1',
    name: 'August Invoice',
    age: 1000 - 1539485123,
    address: (
      <>
        <Button
          type="text "
          style={{ color: 'blue' }}
          icon={<DownloadOutlined />}
        >
          Download Invoice
        </Button>
      </>
    ),
    add: (
      <>
        <Button type="text" style={{ color: 'blue' }} icon={<EyeOutlined />}>
          View Statement
        </Button>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text type="danger">MAD - 2, 524.41</Typography.Text>
      </>
    )
  },
  {
    key: '2',
    name: 'Commission Set Aside From Payouts',
    NetPayment: 'MAD - 2, 524.41'
  },
  {
    key: '3',
    name: 'Payout Not Yet Sent',
    NetPayment: (
      <>
        <Typography.Text type="danger">MAD - 2, 524.41</Typography.Text>
      </>
    )
  },
  {
    key: '3',
    add: (
      <>
        <Typography.Text type="danger">
          Payment due by 15, August, 2023
        </Typography.Text>
      </>
    ),
    add1: 'Total Due',
    NetPayment: 'MAD - 2, 524.41'
  }
];

const ManagePayment = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={20}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Typography.Title level={4}>
                  Documents And Invoices
                </Typography.Title>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">Documents</Radio.Button>
                  <Radio.Button value="b">Invoice</Radio.Button>
                </Radio.Group>
                <Space
                  direction="horizontal"
                  style={{
                    width: '28%',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography.Title level={4} type="danger">
                    Outstanding Balances
                  </Typography.Title>
                  <Typography.Link>What’s this ?</Typography.Link>
                </Space>
                <Table
                  pagination={false}
                  columns={columns}
                  dataSource={data}
                  size="middle"
                />
                <Space
                  direction="horizontal"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '2rem'
                  }}
                >
                  <DatePicker
                    placeholder="2023"
                    size="large"
                    onChange={onChange}
                    picker="year"
                  />
                  <Button type="primary" size="large" ghost>
                    Download all 2023 FDFs
                  </Button>
                </Space>
                <Table
                  pagination={false}
                  columns={columns1}
                  dataSource={data1}
                  size="middle"
                />
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManagePayment;
