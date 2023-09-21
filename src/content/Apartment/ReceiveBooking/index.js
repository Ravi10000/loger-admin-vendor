import { Button, Card, Col, Radio, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const ReceiveBooking = () => {
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
            How You Receive Bookings
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
                      We're here to ensure you can receive bookings safely:
                    </Typography.Title>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <Typography.Paragraph>
                          <CheckOutlined style={{ marginRight: '1rem' }} />
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Paragraph>
                      </li>
                      <li>
                        <Typography.Paragraph>
                          <CheckOutlined style={{ marginRight: '1rem' }} />
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Paragraph>
                      </li>
                      <li>
                        <Typography.Paragraph>
                          <CheckOutlined style={{ marginRight: '1rem' }} />
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Paragraph>
                      </li>
                      <li>
                        <Typography.Paragraph>
                          <CheckOutlined style={{ marginRight: '1rem' }} />
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography.Paragraph>
                      </li>
                    </ul>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      How can guests book your apartment?
                    </Typography.Title>
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical">
                        <Radio value={1}>
                          Lorem ipsum dolor sit amet consecteturt.
                        </Radio>
                        <Radio value={2}>
                          Lorem ipsum dolor sit amet consecteturt.
                        </Radio>
                      </Space>
                    </Radio.Group>
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
                        navigate('/apartment/guest');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/apartment/guest-payment');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ReceiveBooking;
