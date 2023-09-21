import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const Payment = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Receiving Payouts from Loger.ma
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={5}>Bank Details</Typography.Title>
                  <Typography.Paragraph style={{ marginBlock: 0 }}>
                    Lorem ipsum dolor sit amet consectetur. Dolor in scelerisque
                    nibh ornare faucibus. Sapien semper id faucibus dictumst vel
                    risus vitae donec vitae. Lorem ipsum dolor sit amet
                    consectetur. Dolor in scelerisque nibh ornare faucibus.
                    Sapien semper id faucibus dictumst vel risus vitae donec
                    vitae.
                  </Typography.Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Typography.Title level={5}>
                        New Bank Details
                      </Typography.Title>
                      <Form layout="vertical">
                        <Form.Item label="Bank" name="bank">
                          <Input.Search allowClear size="large" />
                        </Form.Item>
                        <Form.Item label="Account number" name="acNumber">
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item
                          label="Account holder name"
                          name="holderName"
                          extra="The account holder's name must match the bank's records."
                        >
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item label="Address" name="address">
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 0 }}>
                          <Space
                            style={{
                              width: '100%',
                              justifyContent: 'flex-end'
                            }}
                          >
                            <Button
                              type="primary"
                              htmlType="submit"
                              size="large"
                            >
                              Update bank details
                            </Button>
                          </Space>
                        </Form.Item>
                      </Form>
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Payment;
