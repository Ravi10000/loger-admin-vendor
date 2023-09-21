import { Button, Card, Col, Radio, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Payment = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(1);

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Guest Payment options
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Can you charge credit cards at your property?
                    </Typography.Title>
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical">
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      No problem! Let guests pay online
                    </Typography.Title>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Paragraph>
                        You can let guests pay via Payments by Loger.ma
                      </Typography.Paragraph>
                      <Typography.Text>Payment fee</Typography.Text>
                      <Typography.Text>
                        2.3%
                        <Typography.Link style={{ marginLeft: '0.5rem' }}>
                          Learn more
                        </Typography.Link>
                      </Typography.Text>
                    </Space>
                  </Space>
                  <CardBottom direction="horizontal">
                    <Button
                      size="large"
                      type="primary"
                      ghost
                      icon={<ArrowLeftOutlined />}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                      onClick={() => {
                        navigate('/apartment/receive-booking');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/apartment/charge');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      size="middle"
                      direction="horizontal"
                      style={{ alignItems: 'flex-start', width: '100%' }}
                    >
                      <Typography.Text style={{ fontSize: '2rem' }}>
                        <BulbOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          How does Payments by Loger.ma work?
                        </Typography.Title>
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size="large"
                        >
                          <Space
                            direction="vertical"
                            style={{ width: '100%' }}
                            size="small"
                          >
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: 0 }}
                            >
                              Lorem ipsum
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Non in
                              quis ante porttitor praesent volutpat neque.
                            </Typography.Paragraph>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5} style={{}}>
                              Lorem ipsum
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Non in
                              quis ante porttitor praesent volutpat neque.
                            </Typography.Paragraph>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5} style={{}}>
                              Lorem ipsum
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Non in
                              quis ante porttitor praesent volutpat neque.
                            </Typography.Paragraph>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5} style={{}}>
                              Lorem ipsum
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Non in
                              quis ante porttitor praesent volutpat neque.
                            </Typography.Paragraph>
                          </Space>
                        </Space>
                      </Space>
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      />
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
