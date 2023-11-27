import {
  Button,
  Col,
  DatePicker,
  Card,
  Alert,
  Input,
  Row,
  Collapse,
  Space,
  Table,
  Typography,
  Divider
} from 'antd';
import {
  CopyOutlined,
  CheckCircleTwoTone,
  FilePdfOutlined
} from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const columns = [
  {
    title: 'Booking Reference Number',
    dataIndex: 'reservationNo'
  },
  {
    title: 'Type',
    dataIndex: 'propertyName'
  },
  {
    title: 'Guest Name',
    dataIndex: 'guestName'
  },

  {
    title: 'Check Out',
    dataIndex: 'checkOut'
  },
  {
    title: 'Payment Status',
    dataIndex: 'status'
  },
  {
    title: 'Amount',
    dataIndex: 'price'
  },
  {
    title: 'Commission',
    dataIndex: 'Commission'
  },
  {
    title: 'Payment Charge',
    dataIndex: 'bookedOn'
  },
  {
    title: 'Net Payment',
    dataIndex: 'NetPayment'
  }
];

const data = [
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text
            level={5}
            style={{ opacity: '50%', font: 'Nordnet Sans Mono' }}
          >
            Paid Online
          </Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  },
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text type="secondary">Paid Online</Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  },
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text
            level={5}
            style={{ opacity: '50%', font: 'Nordnet Sans Mono' }}
          >
            Paid Online
          </Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  },
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text
            level={5}
            style={{ opacity: '50%', font: 'Nordnet Sans Mono' }}
          >
            Paid Online
          </Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  },
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text
            level={5}
            style={{ opacity: '50%', font: 'Nordnet Sans Mono' }}
          >
            Paid Online
          </Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  },
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text
            level={5}
            style={{ opacity: '50%', font: 'Nordnet Sans Mono' }}
          >
            Paid Online
          </Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  },
  {
    reservationNo: (
      <>
        <Typography.Link>2345464233</Typography.Link>
      </>
    ),
    propertyName: 'Reservation',
    guestName: 'MohammedAslam',

    checkOut: '24, July, 2023',
    status: (
      <>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Payment</Typography.Text>
          <Typography.Text
            level={5}
            style={{ opacity: '50%', font: 'Nordnet Sans Mono' }}
          >
            Paid Online
          </Typography.Text>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>₹ 2,530</Typography.Text>
      </>
    ),
    Commission: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    bookedOn: (
      <>
        <Typography.Text>₹ -150.46</Typography.Text>
      </>
    ),
    NetPayment: (
      <>
        <Typography.Text>₹ 2,380</Typography.Text>
      </>
    )
  }
];
const text = (
  <p>
    <Table pagination={false} columns={columns} dataSource={data} />
    <Row>
      <Col xs={6} offset={18}>
        <Card >
          <Space direction="vertical" style={{ width: '100%' }}>
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text strong>Total Amount</Typography.Text>
              <Typography.Text strong>₹ 16, 660</Typography.Text>
            </Space>
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text strong>Net Payout in INR</Typography.Text>
              <Typography.Text strong>₹ 16, 660</Typography.Text>
            </Space>
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text strong>Currency Conversion Rate</Typography.Text>
              <Typography.Text strong>₹ 16, 660</Typography.Text>
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text strong style={{ font: 'Nordnet Sans Mono' }}>
                Net Payout
              </Typography.Text>
              <Space
                direction="horizontal"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography.Text strong>MAD </Typography.Text>
                <Typography.Text strong> ₹ 20, 542. 60</Typography.Text>
              </Space>
            </Space>
          </Space>
        </Card>
      </Col>
    </Row>
  </p>
);
const items = [
  {
    key: '1',
    label: (
      <>
        <Space
          direction="horizontal"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography.Text strong>1, August, 28, August</Typography.Text>
          <Space direction="horizontal">
            <Typography.Text strong>CHANS</Typography.Text>
            <CopyOutlined />
          </Space>
          <Space direction="horizontal">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <Typography.Text strong>
              Payout Issued on 20, August, 2023
            </Typography.Text>
          </Space>
          <Space direction="horizontal">
            <FilePdfOutlined />
            <Typography.Text style={{ color: 'blue' }} strong>
              PDF
            </Typography.Text>
          </Space>
          <Typography.Text strong>MAX 10, 993.50</Typography.Text>
        </Space>
      </>
    ),
    children: text
  }
];
const ManagePayment = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={22}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Alert
                  message={
                    <>
                      <Typography.Title level={5} style={{ color: 'blue' }}>
                        Maintenance to Our Finance System
                      </Typography.Title>
                    </>
                  }
                  description={
                    <>
                      <Space direction="vertical" size="large">
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur. Amet
                          vestibulum enim id diam nunc arcu tellus ornare. Sed
                          diam pellentesque sagittis nam. Tristique malesuada
                          volutpat platea ut rhoncus egestas dictum quam leo.
                          Arcu montes bibendum purus tortor.
                        </Typography.Text>
                        <Button type="primary" size="large">
                          Read More
                        </Button>
                      </Space>
                    </>
                  }
                  type="info"
                  showIcon
                />
                <Typography.Title style={{ marginTop: '1rem' }} level={2}>
                  Payout Information
                </Typography.Title>
                <Alert
                  message={
                    <>
                      <Typography.Title level={5} style={{ color: 'blue' }}>
                        Important: When You Can Expect Your Payouts to Resume
                      </Typography.Title>
                    </>
                  }
                  description={
                    <>
                      <Space
                        direction="vertical"
                        size="large"
                        style={{ paddingBottom: '1rem' }}
                      >
                        <Typography.Text>
                          <Typography.Text strong>
                            Weekly Payouts -
                          </Typography.Text>{' '}
                          Payouts for Reservations Checked Out Between 28, July
                          to 19, August will be Processed by 24, July, 2023 (In
                          one Consolidated Payment). the Regular Payout Schedule
                          is Expected to Resume by 27, July, 2023
                        </Typography.Text>
                        <Typography.Text>
                          <Typography.Text strong>
                            Monthly Payouts -{' '}
                          </Typography.Text>
                          <Typography.Text>
                            by 24, July, 2023 (In one Consolidated Payment). the
                            Regular Payout Schedule is Expected to Resume by 27,
                            July, 2023 (In one Consolidated Payment).
                          </Typography.Text>
                        </Typography.Text>
                      </Space>
                    </>
                  }
                  type="info"
                  showIcon
                />
                <Space direction="horizontal">
                  <DatePicker
                    placeholder="2023"
                    size="large"
                    onChange={onChange}
                    picker="year"
                  />
                  <Button size="large" type="primary" ghost>
                    Download all 2023 Statements
                  </Button>
                </Space>
                <Typography.Title level={2}>July</Typography.Title>
                <Input
                  size="large"
                  style={{ height: 80 }}
                  placeholder="Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim id diam nunc arcu tellus ornare"
                ></Input>
                <Typography.Title level={2}>August</Typography.Title>
                <Collapse
                  expandIconPosition="end"
                  items={items}
                  bordered={false}
                  defaultActiveKey={['1']}
                />
                <Typography.Title level={2}>September</Typography.Title>
                <Input
                  placeholder="You Have no Payouts this Month."
                  style={{ height: 80 }}
                ></Input>
                <Row>
                  <Col
                    xs={15}
                    offset={5}
                    style={{ width: '100%', marginTop: '2.5rem' }}
                  >
                    <Card>
                      <Space
                        direction="vertical"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Typography.Title level={4}>
                          Payouts for Previous Months Have Been Archived
                        </Typography.Title>
                        <Typography.Text>
                          Some Reservation Details are no Longer Available. But
                          You Can till Download Each Month’s Remittance Advice.
                        </Typography.Text>
                      </Space>
                    </Card>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManagePayment;
