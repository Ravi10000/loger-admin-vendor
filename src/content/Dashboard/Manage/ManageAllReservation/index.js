import {
  Button,
  Col,
  DatePicker,

  Row,
  Space,
  Alert,
  Table,
  Typography,
  Card
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { PrinterOutlined, DownCircleOutlined  } from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
dayjs.extend(customParseFormat);


const columns = [
  {
    title: 'Booking Number',
    dataIndex: 'BookingNumber',
  },
  {
    title: 'Guest Name',
    dataIndex: 'GuestName',
  },
  {
    title: 'Check-In',
    dataIndex: 'CheckIn',
  },
  {
    title: 'Check-out',
    dataIndex: 'Checkout',
  },
  {
    title: 'Room Nights',
    dataIndex: 'RoomNights',
  },
  {
    title: 'Commission %',
    dataIndex: 'Commission',
  },
  {
    title: 'Result',
    dataIndex: 'Result',
  },
  {
    title: 'Original Amount (INR)',
    dataIndex: 'OriginalAmount',
  },
  {
    title: 'Final Amount (INR)',
    dataIndex: 'FinalAmount',
  },
  {
    title: 'Payment Charge',
    dataIndex: 'PaymentCharge',
  },
  {
    title: 'Commission Amount (INR)',
    dataIndex: 'CommissionAmount',
  },
  
];
const data = [
  {
    key: '1',
    BookingNumber: <><Typography.Link>2345464233</Typography.Link></>,
    GuestName: 'Mohammed Aslam',
    CheckIn: '24, July, 2023',
    Checkout:'24, July, 2023',
    RoomNights:'1',
    Commission:'10%',
    Result:'Stayed',
    OriginalAmount:'₹ 150.46',
    FinalAmount:'₹ 2, 380',
    PaymentCharge:'₹ 150.46',
    CommissionAmount:'₹ 150.46'

  },
  {
    key: '2',
    BookingNumber: <><Typography.Link>2345464233</Typography.Link></>,
    GuestName: 'Mohammed Aslam',
    CheckIn: '24, July, 2023',
    Checkout:'24, July, 2023',
    RoomNights:'1',
    Commission:'10%',
    Result:'Stayed',
    OriginalAmount:'₹ 150.46',
    FinalAmount:'₹ 2, 380',
    PaymentCharge:'₹ 150.46',
    CommissionAmount:'₹ 150.46'

  },
  {
    key: '3',
    BookingNumber: <><Typography.Link>2345464233</Typography.Link></>,
    GuestName: 'Mohammed Aslam',
    CheckIn: '24, July, 2023',
    Checkout:'24, July, 2023',
    RoomNights:'1',
    Commission:'10%',
    Result:'Stayed',
    OriginalAmount:'₹ 150.46',
    FinalAmount:'₹ 2, 380',
    PaymentCharge:'₹ 150.46',
    CommissionAmount:'₹ 150.46'

  },
  {
    key: '4',
    BookingNumber: <><Typography.Link>2345464233</Typography.Link></>,
    GuestName: 'Mohammed Aslam',
    CheckIn: '24, July, 2023',
    Checkout:'24, July, 2023',
    RoomNights:'1',
    Commission:'10%',
    Result:'Stayed',
    OriginalAmount:'₹ 150.46',
    FinalAmount:'₹ 2, 380',
    PaymentCharge:'₹ 150.46',
    CommissionAmount:'₹ 150.46'

  },
  {
    key: '5',
    BookingNumber: <><Typography.Link>2345464233</Typography.Link></>,
    GuestName: 'Mohammed Aslam',
    CheckIn: '24, July, 2023',
    Checkout:'24, July, 2023',
    RoomNights:'1',
    Commission:'10%',
    Result:'Stayed',
    OriginalAmount:'₹ 150.46',
    FinalAmount:'₹ 2, 380',
    PaymentCharge:'₹ 150.46',
    CommissionAmount:'₹ 150.46'

  },
  {
    key: '6',
    BookingNumber: <><Typography.Link>2345464233</Typography.Link></>,
    GuestName: 'Mohammed Aslam',
    CheckIn: '24, July, 2023',
    Checkout:'24, July, 2023',
    RoomNights:'1',
    Commission:'10%',
    Result:'Stayed',
    OriginalAmount:'₹ 150.46',
    FinalAmount:'₹ 2, 380',
    PaymentCharge:'₹ 150.46',
    CommissionAmount:'₹ 150.46'

  },
  {
    key: '7',
    BookingNumber: <><Typography.Text strong>Total</Typography.Text></>,
    
    OriginalAmount:<><Typography.Text strong>₹ 902.76</Typography.Text></>,
    FinalAmount:<><Typography.Text strong>₹ 14, 280</Typography.Text></>,
    PaymentCharge:<><Typography.Text strong>₹ 14, 280</Typography.Text></>,
    CommissionAmount:<><Typography.Text strong>₹ 14, 280</Typography.Text></>

  },
];



const ManageAllReservation = () => {
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
                <Typography.Title level={2}>
                  Documents And Invoices
                </Typography.Title>

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

                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <Row>
                    <Col xs={10}>
                      <Space direction="vertical" size="large">
                        <Typography.Title level={2}>
                          Reservation Statements
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur. Amet
                          vestibulum enim id diam nunc arcu tellus ornare.
                        </Typography.Text>
                        <Space direction="horizontal">
                          <Typography.Text>Period</Typography.Text>
                          <DatePicker picker="month" placeholder="2023-07" />
                        </Space>
                        <Space direction="vertical">
                          <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur. 24, July,
                            2023 Amet vestibulum enim id diam nunc
                          </Typography.Text>
                          <Typography.Link>
                            Click Here to View the Reservations.
                          </Typography.Link>
                        </Space>
                      </Space>
                    </Col>

                    <Col xs={8} offset={6}>
                      <Card>
                        <Space direction="vertical" size="large">
                          <Typography.Title level={4}>
                            Disputes
                          </Typography.Title>
                          <Typography.Text>
                            Lorem Reservations sit amet consectetur. Amet
                            vestibulum enim id diam nunc arcu tellus ornare. Sed
                            diam pellentesque sagittis nam. Tristique malesuada
                            volutpat platea ut rhoncus Video Tutorial: How Do I
                            Modify a Reservation?
                          </Typography.Text>

                          <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur. Amet
                            vestibulum enim id diam nunc arcu tellus ornare.
                          </Typography.Text>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                </Space>
                <Space direction="horizontal" size='large'>
                  <Button type="primary" icon={<DownCircleOutlined />} size='large' ghost >Download XLS</Button>
                  <Button type="primary" icon={<DownCircleOutlined />} size='large' ghost >Download CSV</Button>
                  <Button type="primary" icon={<PrinterOutlined />} size='large' ghost >Print This Page</Button>
                </Space>
                <Table pagination={false} columns={columns} dataSource={data} size="middle" />
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManageAllReservation;
