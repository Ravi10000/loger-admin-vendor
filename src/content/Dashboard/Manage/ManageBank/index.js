import {
  Button,
  Col,
  Row,
  Space,
  Alert,
 
  Typography,
  Card,
  Divider
} from 'antd';

import { BankOutlined } from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const ManageBank = () => {
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
                      <Space
                        direction="vertical"
                        size="large"
                        style={{ marginBottom: '2.5rem' }}
                      >
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
                <Typography.Title level={2}>Bank Details </Typography.Title>
                <Typography.Text>
                  Lorem ipsum dolor sit amet consectetur. Purus aliquet aliquet
                  ut turpis pellentesque.
                </Typography.Text>
                <Row>
                  <Col xs={16}>
                    <Card>
                      <Space
                        direction="vertical"
                        size="large"
                        style={{ width: '100%' }}
                      >
                        <Typography.Text strong>
                          Receiving Payment From Loger.ma
                        </Typography.Text>
                        <Divider color="blue" />

                        <Space
                          direction="horizontal"
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Button type="primary" size="large" ghost>
                            Account Number
                          </Button>

                          <Space direction="vertical">
                            <Typography.Text>
                              012309876543210987654321
                            </Typography.Text>
                            <Typography.Text strong>
                              012309876543210987654321
                            </Typography.Text>
                            <Space direction="horizontal">
                              <BankOutlined />
                              <Typography.Text type="danger">
                                Union Bank of India
                              </Typography.Text>
                            </Space>
                            <Typography.Text strong>UBINMATWW</Typography.Text>
                            <Typography.Text>
                              76 King StreetLondonEC72 6WK
                            </Typography.Text>
                          </Space>
                        </Space>
                        <Divider style={{ color: 'blue' }} />

                        <Space
                          direction="horizontal"
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center  '
                          }}
                        >
                          <Button type="primary" size="large" ghost>
                            Account Holder Name
                          </Button>
                          <Space
                            direction="vertical"
                            size="large"
                            style={{
                              marginBottom: '2.5rem',
                              display: 'grid',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Typography.Text style={{ marginBottom: '2.5rem' }}>
                              Leslie Alexander
                            </Typography.Text>
                            <Button
                              type="primary"
                              style={{ marginTop: '2.5rem' }}
                            >
                              Edit Bank Details
                            </Button>
                          </Space>
                        </Space>
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

export default ManageBank;
