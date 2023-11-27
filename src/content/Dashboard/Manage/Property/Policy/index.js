import {
  Button,
  Card,
  Col,
  Divider,
  List,
  Row,
  Space,
  Typography,
  Grid
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const { useBreakpoint } = Grid;

const Policy = () => {
  const breakpoints = useBreakpoint();

  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} xl={20}>
              <Space direction="vertical" size={48} style={{ width: '100%' }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={2} style={{ marginBottom: 0 }}>
                    Policies
                  </Typography.Title>
                  <Typography.Text>
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consectetur.
                  </Typography.Text>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Cancellation and Prepayment Policies
                  </Typography.Title>
                  <Card>
                    <Row gutter={[32, 32]}>
                      <Col xs={24} xxl={16}>
                        <Space
                          direction="vertical"
                          style={{
                            width: '100%'
                          }}
                          size="middle"
                        >
                          <ul style={{ marginLeft: '1rem' }}>
                            <li>
                              <Typography.Paragraph>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a
                                feugiat. Massa arcu lacus eget turpis maNulla tm
                                sollicitudin sed rhoncus mollis.
                              </Typography.Paragraph>
                            </li>
                            <li>
                              <Typography.Paragraph>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a
                                feugiat. Massa arcu lacus eget turpis maNulla tm
                                sollicitudin sed rhoncus mollis.
                              </Typography.Paragraph>
                            </li>
                          </ul>
                          <Space>
                            <Button type="primary" size="large">
                              Edit
                            </Button>
                            <Button type="primary" ghost size="large">
                              Apply to Other Properties
                            </Button>
                          </Space>
                        </Space>
                      </Col>
                      <Col xs={24} xxl={1} style={{ textAlign: 'center' }}>
                        <Divider
                          type={breakpoints.xxl ? 'vertical' : 'horizontal'}
                          style={{ height: '100%', marginBlock: 0 }}
                        />
                      </Col>
                      <Col xs={24} xxl={7}>
                        <List
                          bordered={false}
                          dataSource={[
                            {
                              title: 'Report From',
                              data: '22 Apr 2023 to 21 Jul 2023'
                            },
                            {
                              title: 'Total Room Lights',
                              data: '4'
                            },
                            {
                              title: 'Total Revenue',
                              data: '800'
                            }
                          ]}
                          renderItem={(item, index) => (
                            <List.Item>
                              <Space direction="vertical">
                                <Typography.Text>{item.title}</Typography.Text>
                                <Typography.Text>{item.data}</Typography.Text>
                              </Space>
                            </List.Item>
                          )}
                        />
                      </Col>
                    </Row>
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Modification and Cancelation Exceptions
                  </Typography.Title>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} xxl={12}>
                      <Card
                        type="inner"
                        title="Date Changes for Non-Refundable Bookings"
                        style={{ flexGrow: 1 }}
                      >
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Typography.Text strong>
                            Save Time, Make it Easier for Guests to Reschedule
                            if Plans Change
                          </Typography.Text>
                          <Typography.Paragraph>
                            Lorem ipsum dolor sit amet consectetur. Nibh
                            hendrerit amet lectus lacinia at eu diam a feugiat.
                            Massa arcu lacus eget turpis maNulla tm sollicitudin
                            sed rhoncus mattis ultrices quisque condimentum
                            neque.
                          </Typography.Paragraph>
                          <Button type="primary">Edit</Button>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Cancellations Exceptions">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Grace Period
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a{' '}
                              </li>
                            </ul>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Advanced Cancellations
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a{' '}
                              </li>
                            </ul>
                          </Space>
                          <Button type="primary">Edit</Button>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Children & Extra Beds
                  </Typography.Title>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Children Policies">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Children Policies
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a{' '}
                              </li>
                            </ul>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Children Rates
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a{' '}
                              </li>
                            </ul>
                          </Space>
                          <Button type="primary">Edit</Button>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Extra Bed & Cot Options">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>Cots</Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a{' '}
                              </li>
                            </ul>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>Extra Beds</Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a{' '}
                              </li>
                            </ul>
                          </Space>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Other Policies
                  </Typography.Title>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Guest Information">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Check-in and Check-out Times
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>Not Selected</li>
                            </ul>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Guest Address Details
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Your Guests do not have to Provide their address
                              </li>
                            </ul>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>
                              Guest Phone Number
                            </Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>
                                Your Guests Must Provide Number when they Book
                              </li>
                            </ul>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Text strong>Age Limit</Typography.Text>
                            <ul style={{ marginLeft: '1rem' }}>
                              <li>No Age Limit</li>
                            </ul>
                          </Space>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Additional Fees & Charges">
                        <Typography.Text>
                          You haven't Specified any Additional Fees or Charges
                        </Typography.Text>
                      </Card>
                    </Col>
                  </Row>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Damage Policy Options">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur. Nibh
                            hendrerit amet lectus lacinia at
                          </Typography.Text>
                          <Button type="primary">Edit</Button>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Keys Collection">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur. Nibh
                            hendrerit amet lectus lacinia at
                          </Typography.Text>
                          <Button type="primary">Edit</Button>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="House Rules">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Typography.Text>
                            You have set the following House Rules for Your
                            Guests
                          </Typography.Text>
                          <ul style={{ marginLeft: '1rem' }}>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                          </ul>
                          <Space>
                            <Button type="primary">Edit</Button>
                            <Button type="primary" ghost>
                              Apply to other Properties
                            </Button>
                          </Space>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={24} xxl={12}>
                      <Card type="inner" title="Smart Flex Reservation">
                        <Space
                          direction="vertical"
                          size="middle"
                          style={{ width: '100%' }}
                        >
                          <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur. Nibh
                            hendrerit amet lectus lacinia at eu diam a feugiat.
                            Massa arcu lacus eget turpis maNulla tm sollicitudin
                            sed rhoncus mollis. Malesuada libero erat mattis
                            ultrices
                          </Typography.Text>
                          <Button type="primary">Learn More</Button>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                </Space>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Policy;
