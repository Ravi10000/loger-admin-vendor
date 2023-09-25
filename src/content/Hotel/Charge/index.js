import {
  ArrowLeftOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Input,
  Row,
  Select,
  Space,
  Typography
} from 'antd';

import React from 'react';
import { BulbOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';

const options = [
  {
    value: 'INR',
    label: 'INR'
  },
  {
    value: 'USD',
    label: 'USD'
  }
];

const Charge = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            How Much Do You Want to Charge Per Night?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        Price guests pay
                      </Typography.Title>
                      <Space.Compact style={{ width: '100%' }}>
                        <Select
                          style={{ width: 'auto' }}
                          size="large"
                          defaultValue="INR"
                          options={options}
                        />
                        <Input size="large" />
                      </Space.Compact>
                      <Typography.Text>
                        Including taxes, commsion and charges
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        20% Loger.ma Commission
                      </Typography.Title>
                      <Space direction="vertical">
                        <Typography.Paragraph style={{ marginBottom: 0 }}>
                          <CheckOutlined
                            style={{
                              marginRight: '1rem',
                              color: theme.antd.colorSuccess
                            }}
                          />
                          24/7 Help in Your Language
                        </Typography.Paragraph>
                        <Typography.Paragraph style={{ marginBottom: 0 }}>
                          <CheckOutlined
                            style={{
                              marginRight: '1rem',
                              color: theme.antd.colorSuccess
                            }}
                          />
                          Save time with automatically confirmed bookings
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{ marginBottom: 0 }}>
                          <CheckOutlined
                            style={{
                              marginRight: '1rem',
                              color: theme.antd.colorSuccess
                            }}
                          />
                          We promote your place on Google
                        </Typography.Paragraph>
                      </Space>
                    </Space>
                    <Divider style={{ marginBlock: 0 }} />
                    <Typography.Title level={5} style={{ marginBottom: 0 }}>
                      <Typography.Text
                        style={{ color: theme.antd.colorPrimary }}
                      >
                        INR 400.00
                      </Typography.Text>{' '}
                      Your earning( including taxes )
                    </Typography.Title>
                  </Space>
                </Card>
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
                      navigate('/hotel/room');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    block
                    onClick={() => {
                      navigate('/hotel/plans');
                    }}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Space>
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
                          What if I'm not sure about my price?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet.{' '}
                          <Typography.Link>Learn More</Typography.Link>
                        </Typography.Paragraph>
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

export default Charge;
