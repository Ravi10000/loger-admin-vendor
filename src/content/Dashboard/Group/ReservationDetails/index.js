import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import {
  Card,
  Col,
  Collapse,
  Divider,
  Row,
  Space,
  Typography,
  Skeleton
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { useBooking } from 'src/hooks/booking.queries';
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const ReservationDetails = () => {
  const { bookingId } = useParams();
  const { booking, isFetching } = useBooking({
    bookingId,
    select: ['propertyId transactionId userId pkgDetails']
  });
  console.log({ booking });
  if (booking?.pkgDetails) booking.pkgDetails = JSON.parse(booking?.pkgDetails);
  const { user, transaction, property } = booking || {};

  const theme = useTheme();
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} xl={20} xxl={16}>
              <Space size={48} direction="vertical" style={{ width: '100%' }}>
                <Collapse
                  expandIconPosition="end"
                  expandIcon={() => <DownOutlined />}
                  items={[
                    {
                      key: '1',
                      label: (
                        <>
                          <Typography.Title level={5}>
                            Reservation
                          </Typography.Title>
                          <Typography.Text>
                            Last Update was on 20, Jul, 2023 Time - 04:55 pm
                          </Typography.Text>
                        </>
                      ),
                      children:
                        'Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim id diam nunc arcu tellus ornare. Sed diam pellentesque sagittis nam.'
                    }
                  ]}
                />
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBlock: 0 }}>
                    Reservation Details
                  </Typography.Title>
                  {isFetching ? (
                    <Skeleton active/>
                  ) : (
                    <Card>
                      <Row gutter={[0, 32]}>
                        <Col xs={24}>
                          <Row gutter={32}>
                            <Col xs={4}>
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Check-In
                                </Typography.Text>
                                <Typography.Text>
                                  {dayjs(booking?.checkInDate)?.format(
                                    'ddd DD, MMM, YYYY'
                                  )}
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={20}>
                              <Space direction="vertical">
                                <Typography.Text italic>
                                  Guest Name
                                </Typography.Text>
                                <Typography.Text
                                  style={{ color: theme.antd.colorPrimary }}
                                >
                                  {transaction?.firstName + ' '}
                                  {transaction?.lastName}
                                </Typography.Text>
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={32}>
                            <Col xs={4}>
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Check-Out
                                </Typography.Text>
                                <Typography.Text>
                                  {dayjs(booking?.checkOutDate)?.format(
                                    'ddd DD, MMM, YYYY'
                                  )}
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={20}>
                              <Space direction="vertical">
                                <Typography.Text
                                  style={{ color: theme.antd.colorPrimary }}
                                >
                                  {transaction?.email}
                                </Typography.Text>
                                <Typography.Paragraph
                                  style={{ marginBottom: 0 }}
                                >
                                  Lorem ipsum dolor sit amet consectetur. Amet
                                  vestibulum enim id diam nunc arcu tellus
                                  ornare. Sed diam pellentesque sagittis nam.
                                </Typography.Paragraph>
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>
                          <Row gutter={[32, 32]} style={{ flexWrap: 'wrap' }}>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Length of Stay:
                                </Typography.Text>
                                <Typography.Text strong>
                                  {dayjs(booking?.checkOutDate).diff(
                                    booking?.checkInDate,
                                    'day'
                                  ) + 1}{' '}
                                  Nights
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Preferred Language
                                </Typography.Text>
                                <Typography.Text strong>Arabic</Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Reservation No.
                                </Typography.Text>
                                <Typography.Text strong>
                                  2564568732
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Total Guests:
                                </Typography.Text>
                                <Typography.Text strong>
                                  {booking?.pkgDetails?.noOfAdults} Adults,{' '}
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Channel:
                                </Typography.Text>
                                <Typography.Text strong>
                                  Loger.ma
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Code
                                </Typography.Text>
                                <Typography.Text strong>
                                  PC029090
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Total Room
                                </Typography.Text>
                                <Typography.Text strong>
                                  {booking?.pkgDetails?.noOfRooms}
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Taxes and Charges
                                </Typography.Text>
                                <Typography.Text strong>900</Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Total Price
                                </Typography.Text>
                                <Typography.Text strong>
                                  {booking?.transaction?.discountedAmount}
                                </Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Commission and Charge
                                </Typography.Text>
                                <Typography.Text strong>200</Typography.Text>
                              </Space>
                            </Col>
                            <Col xs={6}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Text type="secondary">
                                  Payment Status
                                </Typography.Text>
                                <Typography.Text strong>
                                  {booking?.transaction?.status}
                                </Typography.Text>
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  )}
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Payment Details
                  </Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space
                        style={{ width: '100%' }}
                        direction="horizontal"
                        align="start"
                        size="middle"
                      >
                        <ClockCircleOutlined />
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Space
                            direction="vertical"
                            size={0}
                            style={{ width: '100%' }}
                          >
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: 0 }}
                            >
                              Bank Transfer Payout
                            </Typography.Title>
                            <Typography.Text type="secondary">
                              Not Yet Sent
                            </Typography.Text>
                          </Space>
                          <Typography.Text>
                            Loger.ma.com will Collect ₹ 3, 500 From the Guest.
                            We’ll Send You a Bank Transfer for This Reservation
                            by 30 July, 2023 The Payout is Subject to Your
                            Cancellation Policy.
                          </Typography.Text>
                        </Space>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space
                        direction="horizontal"
                        style={{ width: '100%' }}
                        align="start"
                        size="middle"
                      >
                        <ClockCircleOutlined />
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Space
                            direction="vertical"
                            size={0}
                            style={{ width: '100%' }}
                          >
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: 0 }}
                            >
                              Extra Charges
                            </Typography.Title>
                            <Typography.Text>
                              Lorem ipsum dolor sit amet consectetur. Amet
                              vestibulum enim id diam nunc arcu tellus ornare.
                              Sed diam pellentesque sagittis nam.
                            </Typography.Text>
                          </Space>
                          <Space
                            direction="vertical"
                            size={0}
                            style={{ width: '100%' }}
                          >
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: 0 }}
                            >
                              City Tax
                            </Typography.Title>
                            <Typography.Text>
                              &#8377; 100 Per Person Per Night
                            </Typography.Text>
                          </Space>
                        </Space>
                      </Space>
                    </Space>
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    {property?.propertyName}
                  </Typography.Title>
                  <Collapse
                    expandIconPosition="end"
                    expandIcon={() => <DownOutlined />}
                    items={[
                      {
                        key: '1',
                        label: (
                          <>
                            <Typography.Title level={5}>
                              Reservation
                            </Typography.Title>
                            <Typography.Text>
                              Last Update was on 20, Jul, 2023 Time - 04:55 pm
                            </Typography.Text>
                          </>
                        ),
                        children:
                          'Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim id diam nunc arcu tellus ornare. Sed diam pellentesque sagittis nam.'
                      }
                    ]}
                  />
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title style={{ marginBottom: 0 }} level={4}>
                    Two-Bedroom Apartment (Appartment 2 )
                  </Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space
                        diection="horizontal"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                        align="center"
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Cancellation
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space
                        diection="horizontal"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                        align="center"
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Damage Policy option
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space
                        diection="horizontal"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                        align="center"
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Internet
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Row gutter={16}>
                        <Col xs={12}>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Children and Extra Bed Policy
                          </Typography.Title>
                        </Col>
                        <Col xs={12}>
                          <Space
                            direction="vertical"
                            size="large"
                            style={{ width: '100%', textAlign: 'end' }}
                          >
                            <Typography.Text>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Text>
                            <Divider style={{ marginBlock: 0 }} />
                            <Typography.Text>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Text>
                            <Divider style={{ marginBlock: 0 }} />
                            <Typography.Text>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Text>
                            <Divider style={{ marginBlock: 0 }} />
                            <Typography.Text>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Text>
                          </Space>
                        </Col>
                      </Row>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space
                        diection="horizontal"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                        align="center"
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Parking
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space
                        diection="horizontal"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                        align="center"
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Pets
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space
                        diection="horizontal"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between'
                        }}
                        align="center"
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Groups
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Text>
                      </Space>
                    </Space>
                  </Card>
                </Space>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ReservationDetails;
